/** Маска и валидация телефонов РБ (+375) и РФ (+7). */

const BY_TOTAL = 12; // 375 + 9 цифр
const RF_TOTAL = 11; // 7 + 10 цифр

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

function formatBy(digits: string): string {
  const d = digits.slice(0, BY_TOTAL);
  const cc = d.slice(0, Math.min(3, d.length));
  const a = d.slice(3, 5);
  const b = d.slice(5, 8);
  const c = d.slice(8, 10);
  const e = d.slice(10, 12);

  let out = `+${cc}`;
  if (a) {
    out += ` (${a}`;
    if (a.length === 2) out += ")";
  }
  if (b) out += ` ${b}`;
  if (c) out += `-${c}`;
  if (e) out += `-${e}`;
  return out;
}

function formatRf(digits: string): string {
  const d = digits.slice(0, RF_TOTAL);
  const a = d.slice(1, 4);
  const b = d.slice(4, 7);
  const c = d.slice(7, 9);
  const e = d.slice(9, 11);

  let out = "+7";
  if (a) {
    out += ` (${a}`;
    if (a.length === 3) out += ")";
  }
  if (b) out += ` ${b}`;
  if (c) out += `-${c}`;
  if (e) out += `-${e}`;
  return out;
}

/**
 * Приводит ввод к цифрам с кодом страны:
 * РБ — 375… (12), РФ — 7… (11).
 * Учитывает набор через 8 (РБ: 80 29…, РФ: 8 9…).
 */
export function normalizeByRfDigits(value: string): string {
  const digits = digitsOnly(value);
  if (!digits) return "";

  // Уже международный РБ / набор 3…37…375…
  if (digits.startsWith("375") || digits.startsWith("37") || digits === "3") {
    return digits.slice(0, BY_TOTAL);
  }

  // РБ через 8: 80 25 / 80 29 / 80 33 / 80 44
  if (/^80(25|29|33|44)/.test(digits)) {
    return (`375${digits.slice(2)}`).slice(0, BY_TOTAL);
  }

  // Неполный набор 8 / 80 / 802… — ещё не знаем оператора, оставляем как есть
  if (
    digits === "8" ||
    digits === "80" ||
    /^80(2|25|29|3|33|4|44)/.test(digits)
  ) {
    return digits.slice(0, 11);
  }

  // РФ через 8: 8 9XX…
  if (digits.startsWith("89")) {
    return (`7${digits.slice(1)}`).slice(0, RF_TOTAL);
  }

  // Прочий «8…» трактуем как РФ (8 → 7)
  if (digits.startsWith("8")) {
    return (`7${digits.slice(1)}`).slice(0, RF_TOTAL);
  }

  if (digits.startsWith("7")) {
    return digits.slice(0, RF_TOTAL);
  }

  // Локальный мобильный РБ без кода страны
  if (/^(25|29|33|44)/.test(digits)) {
    return (`375${digits}`).slice(0, BY_TOTAL);
  }

  // Локальный мобильный РФ без кода страны
  if (digits.startsWith("9")) {
    return (`7${digits}`).slice(0, RF_TOTAL);
  }

  // Любые другие цифры (например 111…) не относятся ни к РБ, ни к РФ
  return "";
}

/** Форматирует как +375 (XX) XXX-XX-XX или +7 (XXX) XXX-XX-XX. */
export function formatByRfPhone(value: string): string {
  const digits = normalizeByRfDigits(value);
  if (!digits) return "";

  // Неполный набор через 8 для РБ — показываем маску РБ по мере ввода
  if (
    digits === "8" ||
    digits === "80" ||
    /^80(2|25|29|3|33|4|44)/.test(digits)
  ) {
    const asBy =
      digits === "8" || digits === "80"
        ? "375"
        : `375${digits.slice(2)}`;
    return formatBy(asBy);
  }

  if (
    digits.startsWith("375") ||
    digits.startsWith("37") ||
    digits === "3"
  ) {
    return formatBy(digits);
  }

  if (digits.startsWith("7")) {
    return formatRf(digits);
  }

  return "";
}

export function isValidByRfPhone(value: string): boolean {
  const digits = normalizeByRfDigits(value);
  if (digits.startsWith("375")) return digits.length === BY_TOTAL;
  if (digits.startsWith("7")) return digits.length === RF_TOTAL;
  return false;
}

export const PHONE_HINT = "+375 (29) 123-45-67 или +7 (999) 123-45-67";
