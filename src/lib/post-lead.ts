export type LeadSource = "booking" | "certificate" | "contact";

export async function postLead(input: {
  source: LeadSource;
  name: string;
  phone?: string;
  email?: string;
  fields: Record<string, string>;
}) {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    return response.ok;
  } catch {
    return false;
  }
}
