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

function getFirstName(fullName: string): string {
  const trimmed = fullName.trim();
  return trimmed.split(/\s+/)[0] || trimmed;
}

interface LeadData {
  name: string;
  phone: string;
  address: string;
  message?: string;
  recaptchaToken?: string;
  utmParams?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
  };
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return true;
  }

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = await res.json();
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

    // Validate UTM param lengths
    const utmFields = data.utmParams ? Object.values(data.utmParams) : [];
    if (utmFields.some(v => v && v.length > 200)) {
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

    // Personalized message body Josh can copy/paste into his SMS app
    // (sms: links don't work in Gmail web or mobile — Gmail filters the protocol)
    const firstName = getFirstName(data.name);
    const smsBody = `Hi ${firstName}, this is Josh from SellToJosh.com. I just got your message about ${data.address}. Do you have a few minutes to chat about your property?`;

    // Send email notification via Resend
    const { error: emailError } = await getResend().emails.send({
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
            ${data.utmParams?.utm_source ? `
            <tr><td colspan="2" style="padding: 15px 10px 5px; font-weight: bold; color: #2d3367; border-bottom: 1px solid #eee;">Campaign Info</td></tr>
            ${data.utmParams.utm_source ? `<tr><td style="padding: 8px 10px; border-bottom: 1px solid #eee; font-weight: bold;">Source:</td><td style="padding: 8px 10px; border-bottom: 1px solid #eee;">${escapeHtml(data.utmParams.utm_source)}</td></tr>` : ''}
            ${data.utmParams.utm_medium ? `<tr><td style="padding: 8px 10px; border-bottom: 1px solid #eee; font-weight: bold;">Medium:</td><td style="padding: 8px 10px; border-bottom: 1px solid #eee;">${escapeHtml(data.utmParams.utm_medium)}</td></tr>` : ''}
            ${data.utmParams.utm_campaign ? `<tr><td style="padding: 8px 10px; border-bottom: 1px solid #eee; font-weight: bold;">Campaign:</td><td style="padding: 8px 10px; border-bottom: 1px solid #eee;">${escapeHtml(data.utmParams.utm_campaign)}</td></tr>` : ''}
            ${data.utmParams.utm_content ? `<tr><td style="padding: 8px 10px; border-bottom: 1px solid #eee; font-weight: bold;">Content:</td><td style="padding: 8px 10px; border-bottom: 1px solid #eee;">${escapeHtml(data.utmParams.utm_content)}</td></tr>` : ''}
            ${data.utmParams.utm_term ? `<tr><td style="padding: 8px 10px; font-weight: bold;">Term:</td><td style="padding: 8px 10px;">${escapeHtml(data.utmParams.utm_term)}</td></tr>` : ''}
            ` : ''}
          </table>

          <div style="margin-top: 30px; padding: 15px; background-color: #f7f7f7; border-radius: 8px; color: #666; font-size: 14px;">
            <strong style="color: #333;">Quick Actions:</strong>
            <p style="margin: 8px 0;">
              • Call: <a href="tel:${escapeHtml(data.phone)}" style="color: #2d3367;">${escapeHtml(data.phone)}</a>
            </p>
            <p style="margin: 8px 0;">
              • Text: copy this message to send to ${escapeHtml(firstName)}:
            </p>
            <div style="background: #f4f4f4; padding: 12px; border-left: 3px solid #2d3367; margin: 8px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.5; color: #333; user-select: all; -webkit-user-select: all;">
              ${escapeHtml(smsBody)}
            </div>
            <p style="margin: 8px 0;">
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

Quick Actions:
- Call: tel:${data.phone}
- Text the lead — copy this message:
  "${smsBody}"
- Reply to this email to follow up${data.utmParams?.utm_source ? `\n\nCampaign Info:\nSource: ${escapeHtml(data.utmParams.utm_source)}${data.utmParams.utm_medium ? `\nMedium: ${escapeHtml(data.utmParams.utm_medium)}` : ''}${data.utmParams.utm_campaign ? `\nCampaign: ${escapeHtml(data.utmParams.utm_campaign)}` : ''}${data.utmParams.utm_content ? `\nContent: ${escapeHtml(data.utmParams.utm_content)}` : ''}${data.utmParams.utm_term ? `\nTerm: ${escapeHtml(data.utmParams.utm_term)}` : ''}` : ''}
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
