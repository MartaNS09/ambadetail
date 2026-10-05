export const LEAD_SOURCES = ["booking", "certificate", "contact"] as const;
export const LEAD_STATUSES = [
  "new",
  "in_progress",
  "confirmed",
  "done",
  "cancelled",
] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export type Lead = {
  id: string;
  source: LeadSource;
  name: string;
  phone: string;
  email: string;
  payload: Record<string, string>;
  status: LeadStatus;
  staffNote: string;
  createdAt: string;
  updatedAt: string;
};
