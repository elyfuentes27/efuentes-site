import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST( req, res) {
  const { name, email, message } = req.body;
  try {
    const data = await resend.emails.send({
      from: 'Ely Fuentes <ely@elyfuentes.dev>',
      to: `${email}`,
      subject: `${name} has a message!`,
      react: EmailTemplate({ name, email, message }),
    });
    if (data.status === 'success') {
      return NextResponse.json({ message: 'Email successfully Sent!' });
    }
    console.log('res', res.json(data))
    return res.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
