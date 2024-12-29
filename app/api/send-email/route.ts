import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: Request) {
  console;
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const msg = {
      to: email,
      from: "codeup.com@gmail.com",
      subject: "Welcome to Stude!",
      text: "Thanks for subscribing to our stude notifications group!",
      html: "<strong>Thanks for subscribing to our Stude notifications group!</strong>",
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Error sending email:", error.response?.body || error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
