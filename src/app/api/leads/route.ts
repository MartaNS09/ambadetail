import { NextResponse } from "next/server";
import { createLead, LEAD_SOURCES, type LeadSource } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const source = String(body?.source || "") as LeadSource;
    if (!LEAD_SOURCES.includes(source)) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    const name = String(body?.name || "").trim();
    if (!name) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    await createLead({
      source,
      name,
      phone: body?.phone,
      email: body?.email,
      fields: body?.fields,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead save error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
