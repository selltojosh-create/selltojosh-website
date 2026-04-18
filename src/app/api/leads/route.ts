import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface LeadData {
  name: string;
  phone: string;
  address: string;
  message?: string;
  recaptchaToken?: string;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.log('[DEV] reCAPTCHA secret not configured — skipping verification');
    return true;
  }

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = await res.json();
  console.log('reCAPTCHA verify:', { score: data.score, success: data.success });
  return data.success && (data.score ?? 0) >= 0.5;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit by IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const { allowed, retryAfter } = rateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(retryAfter) } }
      );
    }

    const data: LeadData = await request.json();

    // S3: Input length limits
    if (data.name?.length > 100 || data.phone?.length > 20 ||
        data.address?.length > 200 || (data.message && data.message.length > 2000)) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 });
    }

    // Verify reCAPTCHA if token provided
    if (data.recaptchaToken) {
      const valid = await verifyRecaptcha(data.recaptchaToken);
      if (!valid) {
        return NextResponse.json(
          { error: 'Spam detection failed. Please try again.' },
          { status: 403 }
        );
      }
    }

    // Validate required fields
    if (!data.name || !data.phone || !data.address) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    // Send email notification via Resend
    const { data: emailData, error: emailError } = await getResend().emails.send({
      from: 'SellToJosh.com <leads@selltojosh.com>',
      to: 'SelltoJosh@gmail.com',
      subject: 'New Lead from SellToJosh.com',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d3367; border-bottom: 2px solid #fbaf40; padding-bottom: 10px;">
            New Lead from SellToJosh.com
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(data.name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="tel:${escapeHtml(data.phone)}" style="color: #2d3367;">${escapeHtml(data.phone)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Property Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(data.address)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${escapeHtml(data.message || 'No message provided')}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Submitted:</td>
              <td style="padding: 10px;">${timestamp}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 15px; background-color: #f7f7f7; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Quick Actions:</strong><br>
              • Call: <a href="tel:${escapeHtml(data.phone)}" style="color: #2d3367;">${escapeHtml(data.phone)}</a><br>
              • Reply to this email to follow up
            </p>
          </div>

          <p style="margin-top: 20px; color: #999; font-size: 12px;">
            This lead was submitted through SellToJosh.com
          </p>
        </div>
      `,
      text: `
New Lead from SellToJosh.com

Name: ${escapeHtml(data.name)}
Phone: ${escapeHtml(data.phone)}
Property Address: ${escapeHtml(data.address)}
Message: ${escapeHtml(data.message || 'No message provided')}
Submitted: ${timestamp}
      `.trim(),
    });

    if (emailError) {
      console.error('Email send error:', emailError);
    }

    return NextResponse.json(
      { success: true, message: 'Lead received successfully', emailSent: !emailError },
      { status: 200 }
    );
  } catch (error) {
    console.error('=== CATCH ERROR ===');
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
