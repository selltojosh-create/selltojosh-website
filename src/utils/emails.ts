import { Resend } from "resend";

const from = process.env.LEAD_NOTIFY_FROM || "onboarding@resend.dev";
const to = process.env.LEAD_NOTIFY_TO || "selltojosh@gmail.com";
const apiKey = process.env.RESEND_API_KEY;

export async function sendLeadEmail(payload: {
  address: string;
  phone: string;
  fullName?: string;
  email?: string;
  city?: string;
  state?: string;
  zip?: string;
  message?: string;
}) {
  // If no API key yet, just log and return (safe for local dev)
  if (!apiKey) {
    console.log("✉️  [DEV] Would email lead:", payload);
    return;
  }

  const resend = new Resend(apiKey);

  const subject = `New Lead: ${payload.address || "No address"} (${payload.phone})`;
  const text = [
    `New lead submitted on SellToJosh.com`,
    ``,
    `Name: ${payload.fullName ?? "-"}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email ?? "-"}`,
    `Address: ${payload.address}`,
    `City/State/Zip: ${payload.city ?? "-"}, ${payload.state ?? "-"} ${payload.zip ?? "-"}`,
    `Message: ${payload.message ?? "-"}`,
  ].join("\n");

  const result = await resend.emails.send({
    from,
    to,
    subject,
    text,
  });

  console.log(`email queued to ${to}`, result?.data?.id ? `(id: ${result.data.id})` : "");
}
