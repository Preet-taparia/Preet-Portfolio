import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASS, // Your App Password or Gmail password
  },
});

const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
    });
    console.log('Message sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;
