const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.selltojosh.com/";
const CREDENTIALS_PATH = path.join(__dirname, "..", "secrets", "gsc-credentials.json");
const REPORTS_DIR = path.join(__dirname, "..", "reports");
const OBSIDIAN_REPORTS_DIR = path.join(
  "C:", "Users", "joshi", "OneDrive", "Documents", "ClaudeContext",
  "ClaudeContext", "Projects", "SellToJosh", "Weekly Reports"
);
const GDRIVE_REPORTS_DIR = path.join(
  "G:", "My Drive", "SellToJosh", "Weekly Reports"
);
const MIN_IMPRESSIONS = 10;
const OPPORTUNITY_MIN_IMPRESSIONS = 100;

async function authenticate() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(
      `Credentials file not found at ${CREDENTIALS_PATH}\n` +
        "Place your Google Cloud service account JSON in secrets/gsc-credentials.json"
    );
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });

  return auth;
}

function getDateRanges() {
  const today = new Date();

  // GSC data has ~2 day lag, so end at today-2
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() - 2);

  const thisWeekStart = new Date(endDate);
  thisWeekStart.setDate(thisWeekStart.getDate() - 6);

  const priorWeekEnd = new Date(thisWeekStart);
  priorWeekEnd.setDate(priorWeekEnd.getDate() - 1);

  const priorWeekStart = new Date(priorWeekEnd);
  priorWeekStart.setDate(priorWeekStart.getDate() - 6);

  return {
    thisWeek: {
      start: formatDate(thisWeekStart),
      end: formatDate(endDate),
    },
    priorWeek: {
      start: formatDate(priorWeekStart),
      end: formatDate(priorWeekEnd),
    },
  };
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

async function fetchSearchAnalytics(searchconsole, dateRange) {
  const response = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: dateRange.start,
      endDate: dateRange.end,
      dimensions: ["page"],
      rowLimit: 1000,
    },
  });

  return response.data.rows || [];
}

function buildPageMap(rows) {
  const map = new Map();
  for (const row of rows) {
    const page = row.keys[0];
    map.set(page, {
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      position: row.position,
    });
  }
  return map;
}

function computeSummary(rows) {
  if (rows.length === 0) {
    return { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  }

  let totalClicks = 0;
  let totalImpressions = 0;
  let weightedPosition = 0;

  for (const row of rows) {
    totalClicks += row.clicks;
    totalImpressions += row.impressions;
    weightedPosition += row.position * row.impressions;
  }

  return {
    clicks: totalClicks,
    impressions: totalImpressions,
    ctr: totalImpressions > 0 ? totalClicks / totalImpressions : 0,
    position: totalImpressions > 0 ? weightedPosition / totalImpressions : 0,
  };
}

function stripDomain(url) {
  return url.replace(/^https?:\/\/(www\.)?selltojosh\.com/, "") || "/";
}

function formatCtr(ctr) {
  return (ctr * 100).toFixed(1) + "%";
}

function formatPosition(pos) {
  return pos.toFixed(1);
}

function formatDelta(current, prior) {
  const delta = current - prior;
  if (delta > 0) return `+${delta}`;
  return `${delta}`;
}

function formatDeltaPercent(current, prior) {
  const delta = current - prior;
  const pct = (delta * 100).toFixed(1);
  if (delta > 0) return `+${pct}%`;
  return `${pct}%`;
}

function formatDeltaPosition(current, prior) {
  // Lower position is better, so negative delta = improvement
  const delta = current - prior;
  if (delta < 0) return `${delta.toFixed(1)} (improved)`;
  if (delta > 0) return `+${delta.toFixed(1)} (declined)`;
  return "0.0";
}

function analyze(thisWeekRows, priorWeekRows) {
  const thisWeekMap = buildPageMap(thisWeekRows);
  const priorWeekMap = buildPageMap(priorWeekRows);

  const thisWeekSummary = computeSummary(thisWeekRows);
  const priorWeekSummary = computeSummary(priorWeekRows);

  // Top 10 pages by CTR (min impressions threshold)
  const qualifiedPages = thisWeekRows
    .filter((r) => r.impressions >= MIN_IMPRESSIONS)
    .sort((a, b) => b.ctr - a.ctr);

  const topByCtr = qualifiedPages.slice(0, 10);
  const bottomByCtr = [...qualifiedPages].sort((a, b) => a.ctr - b.ctr).slice(0, 10);

  // Opportunity pages: position 4-15, 100+ impressions
  const opportunities = thisWeekRows
    .filter((r) => r.position >= 4 && r.position <= 15 && r.impressions >= OPPORTUNITY_MIN_IMPRESSIONS)
    .sort((a, b) => a.position - b.position);

  // Biggest movers: compare position changes
  const allPages = new Set([...thisWeekMap.keys(), ...priorWeekMap.keys()]);
  const movers = [];

  for (const page of allPages) {
    const current = thisWeekMap.get(page);
    const prior = priorWeekMap.get(page);
    if (current && prior && current.impressions >= MIN_IMPRESSIONS && prior.impressions >= MIN_IMPRESSIONS) {
      movers.push({
        page,
        currentPosition: current.position,
        priorPosition: prior.position,
        positionDelta: current.position - prior.position,
        currentClicks: current.clicks,
        clicksDelta: current.clicks - prior.clicks,
      });
    }
  }

  movers.sort((a, b) => a.positionDelta - b.positionDelta);
  const improved = movers.filter((m) => m.positionDelta < 0).slice(0, 5);
  const declined = movers.filter((m) => m.positionDelta > 0).reverse().slice(0, 5);

  return {
    thisWeekSummary,
    priorWeekSummary,
    topByCtr,
    bottomByCtr,
    opportunities,
    improved,
    declined,
  };
}

function generateReport(dateRanges, analysis) {
  const { thisWeekSummary, priorWeekSummary, topByCtr, bottomByCtr, opportunities, improved, declined } = analysis;

  const lines = [];

  lines.push(`# SEO Performance Report — ${SITE_URL}`);
  lines.push("");
  lines.push(`**This Week:** ${dateRanges.thisWeek.start} to ${dateRanges.thisWeek.end}`);
  lines.push(`**Prior Week:** ${dateRanges.priorWeek.start} to ${dateRanges.priorWeek.end}`);
  lines.push(`**Generated:** ${new Date().toISOString().split("T")[0]}`);
  lines.push("");

  // Summary table
  lines.push("## Summary");
  lines.push("");
  lines.push("| Metric | This Week | Prior Week | Change |");
  lines.push("|--------|-----------|------------|--------|");
  lines.push(
    `| Clicks | ${thisWeekSummary.clicks} | ${priorWeekSummary.clicks} | ${formatDelta(thisWeekSummary.clicks, priorWeekSummary.clicks)} |`
  );
  lines.push(
    `| Impressions | ${thisWeekSummary.impressions} | ${priorWeekSummary.impressions} | ${formatDelta(thisWeekSummary.impressions, priorWeekSummary.impressions)} |`
  );
  lines.push(
    `| Avg CTR | ${formatCtr(thisWeekSummary.ctr)} | ${formatCtr(priorWeekSummary.ctr)} | ${formatDeltaPercent(thisWeekSummary.ctr, priorWeekSummary.ctr)} |`
  );
  lines.push(
    `| Avg Position | ${formatPosition(thisWeekSummary.position)} | ${formatPosition(priorWeekSummary.position)} | ${formatDeltaPosition(thisWeekSummary.position, priorWeekSummary.position)} |`
  );
  lines.push("");

  // Top 10 by CTR
  lines.push(`## Top 10 Pages by CTR (min ${MIN_IMPRESSIONS} impressions)`);
  lines.push("");
  if (topByCtr.length === 0) {
    lines.push("_No pages met the minimum impressions threshold._");
  } else {
    lines.push("| Page | Clicks | Impressions | CTR | Position |");
    lines.push("|------|--------|-------------|-----|----------|");
    for (const row of topByCtr) {
      lines.push(
        `| ${stripDomain(row.keys[0])} | ${row.clicks} | ${row.impressions} | ${formatCtr(row.ctr)} | ${formatPosition(row.position)} |`
      );
    }
  }
  lines.push("");

  // Bottom 10 by CTR
  lines.push(`## Bottom 10 Pages by CTR (min ${MIN_IMPRESSIONS} impressions)`);
  lines.push("");
  if (bottomByCtr.length === 0) {
    lines.push("_No pages met the minimum impressions threshold._");
  } else {
    lines.push("| Page | Clicks | Impressions | CTR | Position |");
    lines.push("|------|--------|-------------|-----|----------|");
    for (const row of bottomByCtr) {
      lines.push(
        `| ${stripDomain(row.keys[0])} | ${row.clicks} | ${row.impressions} | ${formatCtr(row.ctr)} | ${formatPosition(row.position)} |`
      );
    }
  }
  lines.push("");

  // Opportunity pages
  lines.push(`## Opportunity Pages (position 4-15, ${OPPORTUNITY_MIN_IMPRESSIONS}+ impressions)`);
  lines.push("");
  lines.push("_These pages are close to page 1 and could rank higher with optimization._");
  lines.push("");
  if (opportunities.length === 0) {
    lines.push("_No opportunity pages found._");
  } else {
    lines.push("| Page | Clicks | Impressions | CTR | Position |");
    lines.push("|------|--------|-------------|-----|----------|");
    for (const row of opportunities) {
      lines.push(
        `| ${stripDomain(row.keys[0])} | ${row.clicks} | ${row.impressions} | ${formatCtr(row.ctr)} | ${formatPosition(row.position)} |`
      );
    }
  }
  lines.push("");

  // Biggest movers
  lines.push("## Biggest Movers");
  lines.push("");

  lines.push("### Most Improved (position gain)");
  lines.push("");
  if (improved.length === 0) {
    lines.push("_No pages showed significant improvement._");
  } else {
    lines.push("| Page | Position (now) | Position (prior) | Change | Clicks (now) |");
    lines.push("|------|---------------|-----------------|--------|-------------|");
    for (const m of improved) {
      lines.push(
        `| ${stripDomain(m.page)} | ${formatPosition(m.currentPosition)} | ${formatPosition(m.priorPosition)} | ${m.positionDelta.toFixed(1)} | ${m.currentClicks} |`
      );
    }
  }
  lines.push("");

  lines.push("### Biggest Declines (position loss)");
  lines.push("");
  if (declined.length === 0) {
    lines.push("_No pages showed significant decline._");
  } else {
    lines.push("| Page | Position (now) | Position (prior) | Change | Clicks (now) |");
    lines.push("|------|---------------|-----------------|--------|-------------|");
    for (const m of declined) {
      lines.push(
        `| ${stripDomain(m.page)} | ${formatPosition(m.currentPosition)} | ${formatPosition(m.priorPosition)} | +${m.positionDelta.toFixed(1)} | ${m.currentClicks} |`
      );
    }
  }
  lines.push("");

  return lines.join("\n");
}

async function main() {
  console.log("SellToJosh SEO Agent — Google Search Console Report");
  console.log("===================================================\n");

  // Authenticate
  console.log("Authenticating with Google Search Console...");
  const auth = await authenticate();
  const searchconsole = google.searchconsole({ version: "v1", auth });

  // Get date ranges
  const dateRanges = getDateRanges();
  console.log(`This week:  ${dateRanges.thisWeek.start} to ${dateRanges.thisWeek.end}`);
  console.log(`Prior week: ${dateRanges.priorWeek.start} to ${dateRanges.priorWeek.end}\n`);

  // Fetch data
  console.log("Fetching this week's data...");
  const thisWeekRows = await fetchSearchAnalytics(searchconsole, dateRanges.thisWeek);
  console.log(`  -> ${thisWeekRows.length} pages found`);

  console.log("Fetching prior week's data...");
  const priorWeekRows = await fetchSearchAnalytics(searchconsole, dateRanges.priorWeek);
  console.log(`  -> ${priorWeekRows.length} pages found\n`);

  // Handle empty data
  if (thisWeekRows.length === 0 && priorWeekRows.length === 0) {
    console.log("No data returned from Search Console.");
    if (!fs.existsSync(REPORTS_DIR)) {
      fs.mkdirSync(REPORTS_DIR, { recursive: true });
    }
    const reportPath = path.join(REPORTS_DIR, `${formatDate(new Date())}.md`);
    fs.writeFileSync(
      reportPath,
      `# SEO Performance Report — ${SITE_URL}\n\n` +
        `**Generated:** ${formatDate(new Date())}\n\n` +
        "## Insufficient Data\n\n" +
        "No performance data was returned from Google Search Console for the requested date ranges.\n" +
        "This may occur if:\n" +
        "- The site is newly added to Search Console\n" +
        "- The service account does not have access to this property\n" +
        "- There is genuinely no search traffic for these dates\n"
    );
    console.log(`Report written to ${reportPath}`);
    return;
  }

  // Analyze
  console.log("Analyzing data...");
  const analysis = analyze(thisWeekRows, priorWeekRows);

  // Generate report
  const report = generateReport(dateRanges, analysis);
  const dateStr = formatDate(new Date());
  const destinations = [];

  // 1. Local reports folder
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
  const reportPath = path.join(REPORTS_DIR, `${dateStr}.md`);
  fs.writeFileSync(reportPath, report);
  destinations.push(reportPath);

  // 2. Obsidian vault
  try {
    if (!fs.existsSync(OBSIDIAN_REPORTS_DIR)) {
      fs.mkdirSync(OBSIDIAN_REPORTS_DIR, { recursive: true });
    }
    const obsidianPath = path.join(OBSIDIAN_REPORTS_DIR, `${dateStr}.md`);
    fs.writeFileSync(obsidianPath, report);
    destinations.push(obsidianPath);
  } catch (err) {
    console.warn(`Warning: Could not copy to Obsidian vault: ${err.message}`);
  }

  // 3. Google Drive
  try {
    if (!fs.existsSync(GDRIVE_REPORTS_DIR)) {
      fs.mkdirSync(GDRIVE_REPORTS_DIR, { recursive: true });
    }
    const gdrivePath = path.join(GDRIVE_REPORTS_DIR, `${dateStr}.md`);
    fs.writeFileSync(gdrivePath, report);
    destinations.push(gdrivePath);
  } catch (err) {
    console.warn(`Warning: Could not copy to Google Drive: ${err.message}`);
  }

  console.log("\nReport saved to:");
  destinations.forEach((p, i) => console.log(`  ${i + 1}. ${p}`));

  console.log("\nSummary:");
  console.log(`  Clicks:      ${analysis.thisWeekSummary.clicks} (${formatDelta(analysis.thisWeekSummary.clicks, analysis.priorWeekSummary.clicks)})`);
  console.log(`  Impressions: ${analysis.thisWeekSummary.impressions} (${formatDelta(analysis.thisWeekSummary.impressions, analysis.priorWeekSummary.impressions)})`);
  console.log(`  Avg CTR:     ${formatCtr(analysis.thisWeekSummary.ctr)}`);
  console.log(`  Avg Position: ${formatPosition(analysis.thisWeekSummary.position)}`);
}

main().catch((err) => {
  console.error("\nError running SEO agent:");
  console.error(err.message);
  if (err.code === 403) {
    console.error("\nThe service account may not have access to this Search Console property.");
    console.error("Add the service account email as a user in Search Console > Settings > Users and permissions.");
  }
  process.exit(1);
});
