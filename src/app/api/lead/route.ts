import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "@/utils/emails";

const LeadSchema = z.object({
  fullName: z.string().min(1, "Name is required").optional(),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email().optional(),
  address: z.string().min(3, "Address is required"),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  message: z.string().optional(),
  recaptchaToken: z.string().optional(),
});

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.log("[DEV] reCAPTCHA secret not configured — skipping verification");
    return true;
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = await res.json();
  console.log("reCAPTCHA verify:", { score: data.score, success: data.success });
  return data.success && (data.score ?? 0) >= 0.5;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = LeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten() },
        { status: 422 }
      );
    }

    // Verify reCAPTCHA if token provided and secret configured
    if (parsed.data.recaptchaToken) {
      const valid = await verifyRecaptcha(parsed.data.recaptchaToken);
      if (!valid) {
        return NextResponse.json(
          { ok: false, error: "Spam detection failed. Please try again." },
          { status: 403 }
        );
      }
    }

    await sendLeadEmail(parsed.data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
