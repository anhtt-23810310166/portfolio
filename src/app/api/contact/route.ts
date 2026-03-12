import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Khởi tạo Resend với API Key từ biến môi trường
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Gửi email thực tế
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['khaihuyen34@gmail.com'], // Email nhận tin nhắn của bạn (phải khớp với tài khoản Resend khi chưa verify domain)
      subject: `New Message from ${name} via Portfolio`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <hr style="margin-top: 20px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">Sent from your Next.js Portfolio</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message || "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Message sent successfully! I'll get back to you soon." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: error.message || "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
