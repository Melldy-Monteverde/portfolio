import { NextResponse } from "next/server";
import { createTestTransport, createTransportGmail } from "@/configs/transporter.config";

export const POST = async (req) => {
  try {
    const { name, email, comment } = await req.json()

    let message = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: 'New message from the web!',
      html: `
        <h1>Hello there</h1>
        <h3>Someone wants to contact you from the web</h3>
        <p>Here is the contact details:</p>
          <ul>
              <li>User name: ${name}</li>
              <li>User email: ${email}</li>
          </ul>
          <h3>Message:</h3>
          <p>${comment}</p>
        `
    }

    const sendMail = async () => {
      // INFO: GMAIL
      // const transporter = createTransportGmail()

      // INFO: LOCAL
      const transporter = createTestTransport()

      const info = await transporter.sendMail(message)
      console.log(info)
      return
    }

    sendMail()

    return NextResponse.json({
      ok: true,
      status: 200,
      dataForm: { name, email, comment },
    })

  } catch (error) {
    console.log('__ERROR__', error);
    return NextResponse.error(error);
  }
}