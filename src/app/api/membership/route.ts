import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { appendToSheet } from "@/lib/google-sheet";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      memberType,
      paymentMethod,
      name,
      fatherName,
      phone,
      email,
      profession,
      address,
    } = body;

    if (!memberType || !paymentMethod || !name || !phone || !address) {
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
      from: `"Membership Form" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email || process.env.SMTP_EMAIL,
      subject: "New Membership Application",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Membership Application</h2>

          <p><b>Member Type:</b> ${memberType}</p>
          <p><b>Payment Method:</b> ${paymentMethod}</p>
          <p><b>Name:</b> ${name}</p>
          <p><b>Father Name:</b> ${fatherName || "N/A"}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email || "N/A"}</p>
          <p><b>Profession:</b> ${profession || "N/A"}</p>
          <p><b>Address:</b> ${address}</p>
        </div>
      `,
    });

    await appendToSheet("Membership", [
      new Date().toLocaleString("en-BD"),

      String(memberType),
      String(paymentMethod),
      String(name),
      String(fatherName || "N/A"),
      String(phone),
      String(email || "N/A"),
      String(profession || "N/A"),
      String(address),
    ]);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit application",
      },
      { status: 500 },
    );
  }
}
