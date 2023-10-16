import { Resend } from 'resend';
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
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
