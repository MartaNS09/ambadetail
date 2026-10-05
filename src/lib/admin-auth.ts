import { createHmac, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export const ADMIN_COOKIE = "ambadetail_admin";

export function adminConfigured() {
  return (process.env.ADMIN_PASSWORD || "").length >= 8;
}

function secret() {
  return process.env.ADMIN_PASSWORD || "";
}

export function sessionToken() {
  return createHmac("sha256", secret()).update("ambadetail-admin-v1").digest("hex");
}

export function passwordOk(input: string) {
  const expected = secret();
  const left = Buffer.from(input);
  const right = Buffer.from(expected);
  if (left.length !== right.length || left.length === 0) return false;
  return timingSafeEqual(left, right);
}

export function isAdminRequest(request: NextRequest) {
  if (!adminConfigured()) return false;
  return request.cookies.get(ADMIN_COOKIE)?.value === sessionToken();
}

export function setAdminCookie(response: NextResponse) {
  response.cookies.set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
}

export function clearAdminCookie(response: NextResponse) {
  response.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
