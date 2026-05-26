import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Telegram: BOT_TOKEN или CHAT_ID не настроены");
      return NextResponse.json(
        { success: false, error: "Telegram не настроен" },
        { status: 500 },
      );
    }

    const text = `📩 *НОВОЕ СООБЩЕНИЕ С САЙТА*\n\n👤 *Имя:* ${name}\n📧 *Email:* ${email}\n💬 *Сообщение:*\n${message}`;

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      },
    );

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json();
      console.error("Telegram error:", errorData);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error("Telegram exception:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
