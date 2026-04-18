const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

const requests = new Map<string, number[]>();

// Auto-cleanup expired entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of requests) {
    const valid = timestamps.filter((t) => now - t < WINDOW_MS);
    if (valid.length === 0) {
      requests.delete(ip);
    } else {
      requests.set(ip, valid);
    }
  }
}, WINDOW_MS);

export function rateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const timestamps = (requests.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    const oldestInWindow = timestamps[0];
    const retryAfter = Math.ceil((oldestInWindow + WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfter };
  }

  timestamps.push(now);
  requests.set(ip, timestamps);
  return { allowed: true };
}
