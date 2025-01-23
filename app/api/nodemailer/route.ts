import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
export async function POST(req: NextRequest) {
  const formData = await req.json()
  // Nodemailer
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kartik.byte@gmail.com",
      pass: "alhjenynfnoiyemo",
    },
  })

  const mailOptions = {
    from: formData.email,
    to: "kartik200421@gmail.com",
    subject: formData.name + formData.phoneNo,
    text: formData.message,
  }

  transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      return NextResponse.json({ error: error })
    } else {
      console.log("Email sent:", response.response)
      return NextResponse.json({ response: response })
    }
  })
}
