import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_jikyze8B_JHeiKUrV4YLKbrBxXhv1bPV8');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1337ec; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0f172a; margin-bottom: 5px; }
            .value { color: #475569; }
            .message { background: white; padding: 15px; border-radius: 4px; margin-top: 5px; white-space: pre-wrap; }
            .footer { background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Inquiry</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${company}</div>
              </div>
              ${budget ? `
              <div class="field">
                <div class="label">Budget Range:</div>
                <div class="value">${budget}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="message">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was submitted through the Fieldhouse Studio contact form</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    // Note: Using fieldhousestudio@gmail.com for testing. 
    // Once domain is verified at resend.com/domains, change to info@fieldhousestudio.com
    const { data, error } = await resend.emails.send({
      from: 'Fieldhouse Studio <onboarding@resend.dev>',
      to: 'fieldhousestudio@gmail.com',
      subject: `New Contact Inquiry from ${name} - ${company}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
