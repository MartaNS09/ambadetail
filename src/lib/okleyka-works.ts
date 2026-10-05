/** Перечень работ из таблицы оклейки плёнкой. */

import { BYN_SIGN } from "@/lib/byn";

export const WRAPPING_SERVICE = "Оклейка авто плёнкой";

export const WRAPPING_WORKS = [
  {
    group: "Полная оклейка",
    items: ["Полная оклейка", "Полная оклейка (без крыши)"],
  },
  {
    group: "Частичная оклейка",
    items: [
      "Комплекс MINI",
      "Комплекс LITE",
      "Комплекс LITE+",
      "Комплекс STANDART",
      "Комплекс STANDART+",
      "Комплекс PREMIUM",
      "Передний или задний бампер",
      "Стойки лобового стекла (2шт.)",
      "Лобовое стекло",
      "Капот",
      "Полоса на капот (до 50 см)",
      "Крыша",
      "Бронь панорамы",
      "Полоса на крышу",
      "Переднее крыло (1 шт.)",
      "Заднее крыло (1 шт.)",
      "Полоса погрузочной зоны заднего бампера",
      "Крышка багажника",
      "Передняя оптика",
      "Противотуманная оптика",
      "Дверь (1шт)",
      "Порог внешний",
      "Порог внутренний",
      "Боковое зеркало (1шт)",
      "Спойлер",
      "Защита под ручки",
      "Расширитель арок (1шт)",
      "Оклейка боковых стоек (1 сторона)",
      "Оклейка боковых стоек (2 стороны)",
      "Оклейка салона",
    ],
  },
  {
    group: "Демонтаж плёнки",
    items: ["Демонтаж пленки лобового стекла", "Демонтаж пленки любой детали"],
  },
] as const;

export type WrapZoneId =
  | "body"
  | "hood"
  | "fenderFront"
  | "fenderRear"
  | "bumper"
  | "roof"
  | "sill"
  | "door"
  | "light"
  | "trunk"
  | "mirror"
  | "spoiler"
  | "glass"
  | "pillar";

export type WrapCalcItem = {
  id: string;
  name: string;
  tab: "full" | "partial";
  zone: WrapZoneId;
  /** Цены классов 1–5, плёнка SUNMAX | CRYSTALL. null — нет в прайсе. */
  prices: [
    number | null,
    number | null,
    number | null,
    number | null,
    number | null,
  ];
  from?: boolean;
};

/** Позиции калькулятора: полная оклейка элемента и локальные зоны. */
export const WRAPPING_CALC_ITEMS: WrapCalcItem[] = [
  { id: "full", name: "Полная оклейка", tab: "full", zone: "body", prices: [7370, 7804, 8237, 9538, 10405] },
  { id: "full-no-roof", name: "Полная оклейка (без крыши)", tab: "full", zone: "body", prices: [6503, 6937, 7370, 8237, 8671] },
  { id: "hood", name: "Капот", tab: "full", zone: "hood", prices: [650, 694, 910, 1127, 1257] },
  { id: "fender-front", name: "Переднее крыло (1 шт.)", tab: "full", zone: "fenderFront", prices: [173, 260, 347, 434, 564] },
  { id: "fender-rear", name: "Заднее крыло (1 шт.)", tab: "full", zone: "fenderRear", prices: [564, 694, 824, 954, 1084] },
  { id: "bumper", name: "Передний или задний бампер", tab: "full", zone: "bumper", prices: [650, 867, 1084, 1387, 1604] },
  { id: "roof", name: "Крыша", tab: "full", zone: "roof", prices: [564, 737, 997, 1301, 1431] },
  { id: "sill", name: "Порог внешний", tab: "full", zone: "sill", prices: [173, 260, 347, 434, 564] },
  { id: "door", name: "Дверь (1 шт.)", tab: "full", zone: "door", prices: [217, 260, 304, 347, 434] },
  { id: "light", name: "Передняя оптика", tab: "full", zone: "light", prices: [260, 260, 260, 260, 260] },
  { id: "fog", name: "Противотуманная оптика", tab: "full", zone: "light", prices: [65, 65, 65, 65, 65] },
  { id: "trunk", name: "Крышка багажника", tab: "full", zone: "trunk", prices: [173, 260, 390, 390, 564] },
  { id: "mirror", name: "Боковое зеркало (1 шт.)", tab: "full", zone: "mirror", prices: [173, 173, 65, 87, 130] },
  { id: "spoiler", name: "Спойлер", tab: "full", zone: "spoiler", prices: [130, 260, 260, 260, 434] },
  { id: "glass", name: "Лобовое стекло", tab: "full", zone: "glass", prices: [650, 650, 1084, 1084, 1084] },
  { id: "arch", name: "Расширитель арок (1 шт.)", tab: "full", zone: "fenderFront", prices: [108, 130, 152, 173, 260] },
  { id: "mini", name: "Комплекс MINI", tab: "partial", zone: "hood", prices: [660, 660, 660, 660, 660], from: true },
  { id: "lite", name: "Комплекс LITE", tab: "partial", zone: "hood", prices: [880, 880, 880, 880, 880], from: true },
  { id: "lite-plus", name: "Комплекс LITE+", tab: "partial", zone: "body", prices: [1375, 1375, 1375, 1375, 1375], from: true },
  { id: "standart", name: "Комплекс STANDART", tab: "partial", zone: "body", prices: [1595, 1595, 1595, 1595, 1595], from: true },
  { id: "standart-plus", name: "Комплекс STANDART+", tab: "partial", zone: "body", prices: [2145, 2145, 2145, 2145, 2145], from: true },
  { id: "premium", name: "Комплекс PREMIUM", tab: "partial", zone: "body", prices: [2970, 2970, 2970, 2970, 2970], from: true },
  { id: "hood-strip", name: "Полоса на капот (до 50 см)", tab: "partial", zone: "hood", prices: [130, 130, 130, 130, 130] },
  { id: "roof-strip", name: "Полоса на крышу", tab: "partial", zone: "roof", prices: [173, 173, 173, 173, 173] },
  { id: "bumper-strip", name: "Полоса погрузочной зоны бампера", tab: "partial", zone: "bumper", prices: [173, 173, 173, 173, 173] },
  { id: "pillars", name: "Стойки лобового стекла (2 шт.)", tab: "partial", zone: "pillar", prices: [260, 260, 260, null, null] },
  { id: "pano", name: "Бронь панорамы", tab: "partial", zone: "roof", prices: [650, 650, 650, 867, 867] },
  { id: "sill-in", name: "Порог внутренний", tab: "partial", zone: "sill", prices: [43, 43, 87, 87, 130] },
  { id: "handles", name: "Защита под ручки", tab: "partial", zone: "door", prices: [65, 65, 65, 65, 65] },
  { id: "side-pillars-1", name: "Боковые стойки (1 сторона)", tab: "partial", zone: "pillar", prices: [87, 87, 87, 87, 87] },
  { id: "side-pillars-2", name: "Боковые стойки (2 стороны)", tab: "partial", zone: "pillar", prices: [173, 173, 173, 173, 173] },
];

export function priceForClass(
  item: WrapCalcItem,
  classNumber: number,
): number | null {
  const index = Math.min(5, Math.max(1, classNumber)) - 1;
  return item.prices[index];
}

export function formatByn(value: number): string {
  return `${value.toLocaleString("ru-RU")}\u00A0${BYN_SIGN}`;
}
