const OPEN_MINUTES = 10 * 60;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function minskNow(now: Date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Minsk",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      weekday: "short",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((part) => [part.type, part.value]),
  );
  const weekday = parts.weekday;
  const weekend = weekday === "Sat" || weekday === "Sun";
  const hours = Number(parts.hour);
  const minutes = Number(parts.minute);
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    minutes: hours * 60 + minutes,
    weekend,
  };
}

function parseSlot(dateValue: string, timeValue: string) {
  const iso = dateValue.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const dotted = dateValue.trim().match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  const time = timeValue.trim().match(/^(\d{2}):(\d{2})$/);
  if ((!iso && !dotted) || !time) return null;
  const year = Number(iso ? iso[1] : dotted?.[3]);
  const month = Number(iso ? iso[2] : dotted?.[2]);
  const day = Number(iso ? iso[3] : dotted?.[1]);
  const hour = Number(time[1]);
  const minute = Number(time[2]);
  if (hour > 23 || minute > 59) return null;
  const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return { year, month, day, hour, minute, weekend: weekday === 0 || weekday === 6 };
}

function closeMinutes(weekend: boolean) {
  return weekend ? 17 * 60 : 19 * 60;
}

function formatMinutes(total: number) {
  return `${pad(Math.floor(total / 60))}:${pad(total % 60)}`;
}

export function minBookingDate(now = new Date()) {
  const current = minskNow(now);
  let { year, month, day } = current;
  if (current.minutes >= closeMinutes(current.weekend)) {
    const next = new Date(Date.UTC(year, month - 1, day + 1));
    year = next.getUTCFullYear();
    month = next.getUTCMonth() + 1;
    day = next.getUTCDate();
  }
  return `${year}-${pad(month)}-${pad(day)}`;
}

export function timeBounds(dateValue: string, now = new Date()) {
  const slot = parseSlot(dateValue, "10:00");
  const weekend = slot?.weekend ?? false;
  const close = closeMinutes(weekend);
  const max = formatMinutes(close - 1);
  let min = formatMinutes(OPEN_MINUTES);
  const current = minskNow(now);
  const today = `${current.year}-${pad(current.month)}-${pad(current.day)}`;
  if (dateValue === today && current.minutes >= OPEN_MINUTES && current.minutes < close) {
    min = formatMinutes(current.minutes + 1);
  }
  return { min, max };
}

export function bookingSlotError(dateValue: string, timeValue: string, now = new Date()) {
  const slot = parseSlot(dateValue, timeValue);
  if (!slot) return "Укажите дату и время";
  const current = minskNow(now);
  const slotDay = Date.UTC(slot.year, slot.month - 1, slot.day);
  const today = Date.UTC(current.year, current.month - 1, current.day);
  if (slotDay < today) return "Нельзя записать задним числом";
  const slotMinutes = slot.hour * 60 + slot.minute;
  if (slotDay === today && slotMinutes <= current.minutes) {
    return "Это время уже прошло";
  }
  const close = closeMinutes(slot.weekend);
  if (slotMinutes < OPEN_MINUTES || slotMinutes >= close) {
    return slot.weekend
      ? "В субботу и воскресенье запись с 10:00 до 17:00"
      : "В будни запись с 10:00 до 19:00";
  }
  return "";
}

export class BookingSlotError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BookingSlotError";
  }
}
