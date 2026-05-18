import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { appendToSheet } from "@/lib/google-sheet";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      isExpatriate,
      phone,
      email,
      facebook,
      nid,
      education,
      profession,
      volunteerWork,
      skills,
      permanentDistrict,
      permanentAddress,
      currentDistrict,
      currentAddress,
    } = body;

    if (
      !name ||
      !phone ||
      !profession ||
      !volunteerWork ||
      !permanentDistrict ||
      !permanentAddress ||
      !currentDistrict ||
      !currentAddress
    ) {
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
      from: `"Volunteer Registration" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email || process.env.SMTP_EMAIL,
      subject: "New Volunteer Registration",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Volunteer Registration</h2>

          <p><b>নাম:</b> ${name}</p>
          <p><b>প্রবাসী:</b> ${isExpatriate ? "হ্যাঁ" : "না"}</p>
          <p><b>মোবাইল নম্বর:</b> ${phone}</p>
          <p><b>ই-মেইল:</b> ${email || "N/A"}</p>
          <p><b>ফেসবুক আইডি:</b> ${facebook || "N/A"}</p>
          <p><b>এনআইডি নম্বর:</b> ${nid || "N/A"}</p>
          <p><b>শিক্ষাগত যোগ্যতা:</b> ${education || "N/A"}</p>
          <p><b>পেশা:</b> ${profession}</p>
          <p><b>যে কাজে স্বেচ্ছাসেবক হতে চান:</b> ${volunteerWork}</p>
          <p><b>বিশেষ দক্ষতা:</b> ${skills || "N/A"}</p>

          <hr />

          <h3>স্থায়ী ঠিকানা</h3>
          <p><b>জেলা / থানা:</b> ${permanentDistrict}</p>
          <p><b>ঠিকানা:</b> ${permanentAddress}</p>

          <h3>বর্তমান ঠিকানা</h3>
          <p><b>জেলা / থানা:</b> ${currentDistrict}</p>
          <p><b>ঠিকানা:</b> ${currentAddress}</p>
        </div>
      `,
    });

    await appendToSheet("Volunteer", [
      new Date().toLocaleString("en-BD"),

      String(name),
      isExpatriate ? "হ্যাঁ" : "না",
      String(phone),
      String(email || "N/A"),
      String(facebook || "N/A"),
      String(nid || "N/A"),
      String(education || "N/A"),
      String(profession),
      String(volunteerWork),
      String(skills || "N/A"),
      String(permanentDistrict),
      String(permanentAddress),
      String(currentDistrict),
      String(currentAddress),
    ]);

    return NextResponse.json({
      success: true,
      message: "Volunteer registration submitted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit volunteer registration",
      },
      { status: 500 },
    );
  }
}
