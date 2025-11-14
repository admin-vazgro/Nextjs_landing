import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "progrize.app@gmail.com",
      subject: "New Curiosity Submission",
      text: `Name: ${name}\nEmail: ${email}`,
    });
    console.log("DEBUG ENV =>", {
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS
});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
