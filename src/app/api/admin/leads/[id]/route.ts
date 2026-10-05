import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { LEAD_STATUSES, type LeadStatus, updateLead } from "@/lib/leads";
import { BookingSlotError } from "@/lib/studio-hours";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, { params }: Params) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const status = String(body?.status || "") as LeadStatus;
  if (!LEAD_STATUSES.includes(status)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  try {
    const lead = await updateLead(id, {
      status,
      staffNote: String(body?.staffNote || ""),
      date: body?.date ? String(body.date) : undefined,
      time: body?.time !== undefined ? String(body.time) : undefined,
    });
    if (!lead) {
      return NextResponse.json({ success: false }, { status: 404 });
    }
    return NextResponse.json({ success: true, lead });
  } catch (error) {
    if (error instanceof BookingSlotError) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    console.error("Lead update error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
