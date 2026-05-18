import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { appendToSheet } from "@/lib/google-sheet";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, trxId, donationAmount, customAmount } =
      body;

    if (!firstName || !lastName || !email || !trxId) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields missing",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Donation Form" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: "New Donation Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Donation Submission</h2>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Bkash Transaction ID:</b> ${trxId}</p>
          <p><b>Donation Amount:</b> BDT ${donationAmount}</p>
          <p><b>Custom Amount:</b> ${customAmount || "N/A"}</p>
        </div>
      `,
    });

    await appendToSheet("Donation", [
      new Date().toLocaleString("en-BD"),

      String(firstName),
      String(lastName),
      String(email),
      String(trxId),
      String(donationAmount),
      String(customAmount || "N/A"),
    ]);

    return NextResponse.json({
      success: true,
      message: "Donation submitted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send donation message",
      },
      { status: 500 },
    );
  }
}
