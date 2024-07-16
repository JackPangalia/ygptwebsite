import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { subject, text, html } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER_ADRESS,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: 'centonisai@gmail.com',
        to: 'centonisai@gmail.com',
        subject,
        text,
        html,
      });
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
