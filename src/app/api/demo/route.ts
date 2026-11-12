import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface DemoSubmissionPayload {
  fullName: string;
  businessEmail: string;
  companyName: string;
  phone: string;
  manufacturingIndustry: string;
  companySize: string;
  improvementArea: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<DemoSubmissionPayload>;

    // 1. Validation
    const {
      fullName,
      businessEmail,
      companyName,
      phone,
      manufacturingIndustry,
      companySize,
      improvementArea,
      message,
    } = body;

    const errors: Record<string, string> = {};

    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = "Please provide your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail || !emailRegex.test(businessEmail.trim())) {
      errors.businessEmail = "Please provide a valid business email address.";
    }

    if (!companyName || companyName.trim().length < 2) {
      errors.companyName = "Please provide your company or factory name.";
    }

    // Phone validation: allow international codes, min 7, max 16 digits/characters
    const phoneRegex = /^[+]?[\d\s\-().]{7,20}$/;
    if (!phone || !phoneRegex.test(phone.trim())) {
      errors.phone = "Please enter a valid contact phone number with country code.";
    }

    if (!manufacturingIndustry || manufacturingIndustry.trim().length === 0) {
      errors.manufacturingIndustry = "Please select your manufacturing industry.";
    }

    if (!companySize || companySize.trim().length === 0) {
      errors.companySize = "Please indicate your approximate company size.";
    }

    if (!improvementArea || improvementArea.trim().length === 0) {
      errors.improvementArea = "Please select what you are looking to improve.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please review the highlighted fields.",
          errors,
        },
        { status: 400 }
      );
    }

    // 2. Dispatch email if SMTP configured, else safe structured logging
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipient = process.env.DEMO_RECIPIENT_EMAIL || "contact@aetheron.ai";

    const submissionSummary = {
      timestamp: new Date().toISOString(),
      fullName: fullName!.trim(),
      businessEmail: businessEmail!.trim(),
      companyName: companyName!.trim(),
      phone: phone!.trim(),
      manufacturingIndustry: manufacturingIndustry!.trim(),
      companySize: companySize!.trim(),
      improvementArea: improvementArea!.trim(),
      message: message ? message.trim() : "None provided",
    };

    console.info("[AetherBuilt OS Demo Inquiry Received]:", JSON.stringify(submissionSummary, null, 2));

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const emailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #EAE7DF; border-radius: 8px; background: #FFFFFF;">
          <div style="border-bottom: 2px solid #F59E0B; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #252B33; margin: 0; font-size: 20px;">New AetherBuilt OS Demo Request</h2>
            <p style="color: #6B7280; font-size: 13px; margin: 4px 0 0;">Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #252B33;">
            <tr><td style="padding: 8px 0; font-weight: 600; width: 180px;">Full Name:</td><td>${submissionSummary.fullName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Business Email:</td><td><a href="mailto:${submissionSummary.businessEmail}">${submissionSummary.businessEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Company / Factory:</td><td>${submissionSummary.companyName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Phone Number:</td><td>${submissionSummary.phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Industry:</td><td>${submissionSummary.manufacturingIndustry}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Company Size:</td><td>${submissionSummary.companySize}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Primary Improvement Focus:</td><td style="color: #D97706; font-weight: 600;">${submissionSummary.improvementArea}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Additional Message:</td><td>${submissionSummary.message}</td></tr>
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #EAE7DF; font-size: 12px; color: #6B7280;">
            AetherBuilt OS &bull; Aetheron.AI Technologies Private Limited
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"AetherBuilt Inquiries" <${smtpUser}>`,
        to: recipient,
        replyTo: submissionSummary.businessEmail,
        subject: `[AetherBuilt Demo] ${submissionSummary.companyName} — ${submissionSummary.fullName}`,
        html: emailHtml,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Your demonstration request has been successfully registered. Our team will contact you shortly.",
      referenceId: `AB-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("Demo submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again or reach out directly via contact@aetherbuilt.com.",
      },
      { status: 500 }
    );
  }
}
