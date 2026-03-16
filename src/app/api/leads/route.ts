import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface LeadData {
  name: string;
  phone: string;
  address: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Debug: Check if API key is loaded
    console.log('=== LEAD API DEBUG ===');
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    console.log('RESEND_API_KEY prefix:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');

    const data: LeadData = await request.json();
    console.log('Received form data:', JSON.stringify(data, null, 2));

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

    // Log the lead (for development)
    console.log('New lead received:', {
      name: data.name,
      phone: data.phone,
      address: data.address,
      message: data.message || '',
      timestamp,
    });

    console.log('Attempting to send email via Resend...');

    // Send email notification via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
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
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="tel:${data.phone}" style="color: #2d3367;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Property Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.address}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.message || 'No message provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Submitted:</td>
              <td style="padding: 10px;">${timestamp}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 15px; background-color: #f7f7f7; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Quick Actions:</strong><br>
              • Call: <a href="tel:${data.phone}" style="color: #2d3367;">${data.phone}</a><br>
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

Name: ${data.name}
Phone: ${data.phone}
Property Address: ${data.address}
Message: ${data.message || 'No message provided'}
Submitted: ${timestamp}
      `.trim(),
    });

    if (emailError) {
      console.error('=== EMAIL ERROR ===');
      console.error('Error sending email:', JSON.stringify(emailError, null, 2));
    } else {
      console.log('=== EMAIL SUCCESS ===');
      console.log('Email sent successfully:', JSON.stringify(emailData, null, 2));
    }

    return NextResponse.json(
      { success: true, message: 'Lead received successfully', emailSent: !emailError },
      { status: 200 }
    );
  } catch (error) {
    console.error('=== CATCH ERROR ===');
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Failed to process lead', details: String(error) },
      { status: 500 }
    );
  }
}
