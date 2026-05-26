import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY;

    if (!WEB3FORMS_KEY) {
      console.log("Письмо не отправлено (нет ключа Web3Forms):", {
        name,
        email,
        message,
      });
      return NextResponse.json({ success: true, mock: true });
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: name,
        email: email,
        message: message,
        subject: `Новое сообщение от ${name}`,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Web3Forms error:", await response.text());
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error("Email exception:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
