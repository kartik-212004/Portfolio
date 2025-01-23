import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { formData } = await req.json()

    // Validate input
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json({ 
        error: true, 
        errorMessage: "Missing required fields" 
      }, { status: 400 })
    }

    // Create transporter
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL,
      to: "kartik200421@gmail.com",
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div>
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phoneNo || 'Not provided'}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        </div>
      `
    }

   
    const response = await transport.sendMail(mailOptions)

    return NextResponse.json({ 
      response: true, 
      messageId: response.messageId 
    }, { status: 200 })

  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ 
      error: true, 
      errorMessage: "Failed to send email" 
    }, { status: 500 })
  }
}