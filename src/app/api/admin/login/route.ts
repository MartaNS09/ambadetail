import { NextRequest, NextResponse } from "next/server";
import {
  adminConfigured,
  passwordOk,
  setAdminCookie,
} from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  if (!adminConfigured()) {
    return NextResponse.json(
      { success: false, error: "Админка не настроена" },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => ({}));
  if (!passwordOk(String(body?.password || ""))) {
    return NextResponse.json(
      { success: false, error: "Неверный пароль" },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });
  setAdminCookie(response);
  return response;
}
