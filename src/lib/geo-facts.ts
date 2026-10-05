const site = "https://ambadetail.by";

export const studio = {
  name: "Ambadetail",
  alternateName: "Ambassador Detailing",
  legalName: "ООО «СервисЛинк»",
  taxId: "392001662",
  director: "Усенко А.М.",
  city: "Витебск",
  region: "Витебская область",
  street: "ул. П. Бровки, 6А",
  postalCode: "210020",
  phone: "+375 29 223 03 22",
  phoneTel: "+375292230322",
  email: "info@ambadetail.by",
  hoursWeekday: "Пн–Пт 10:00–19:00",
  hoursWeekend: "Сб–Вс 10:00–17:00",
  latitude: 55.173057,
  longitude: 30.24579,
  map: "https://yandex.by/maps/org/ambassador_detailing/104758157236/",
  booking: `${site}/zapisatsya`,
  installment: "Рассрочка на все виды услуг до 5 месяцев без переплат",
  experience: "более 7 лет",
};

export const geoFaq = [
  {
    question: "Где находится детейлинг студия Ambadetail в Витебске?",
    answer:
      "Ambadetail находится в Витебске по адресу ул. П. Бровки, 6А, индекс 210020. Координаты: 55.173057, 30.24579. Карточка организации: https://yandex.by/maps/org/ambassador_detailing/104758157236/",
  },
  {
    question: "Как записаться в Ambadetail и какой режим работы?",
    answer:
      "Запись по телефону +375 29 223 03 22, на почту info@ambadetail.by или через форму https://ambadetail.by/zapisatsya. Режим: Пн–Пт 10:00–19:00, Сб–Вс 10:00–17:00.",
  },
  {
    question: "Сколько стоит оклейка авто плёнкой в Витебске?",
    answer:
      "В Ambadetail комплекс зон риска MINI на плёнке SUNMAX | CRYSTALL — от 660 Б̶. Полная оклейка кузова SUNMAX для 1 класса — 7 370 Б̶, Stek — от 8 671 Б̶. Капот целиком для 1 класса — 650 Б̶. Цена зависит от класса авто и плёнки. Прайс: https://ambadetail.by/uslugi/okleyka-auto-plenkoy",
  },
  {
    question: "Сколько стоит тонировка авто в Витебске и какая разрешена?",
    answer:
      "Полная тонировка в Ambadetail — от 330 Б̶ для 1–2 класса, от 400 Б̶ для 3–4 класса и от 450 Б̶ для 5 класса. Плёнки KAVACA, Llumar, SunTek. Лобовое и передние боковые стёкла — со светопропусканием не ниже 70% по ГОСТ 33997-2016. Задняя полусфера легкового авто с 1 сентября 2025 года без ограничения по затемнению, если есть наружные зеркала с обеих сторон. Прайс: https://ambadetail.by/uslugi/tonirovka",
  },
  {
    question: "Сколько стоит химчистка салона в Витебске?",
    answer:
      "Комплексная химчистка салона в Ambadetail — от 708 Б̶ для автомобиля 1 класса, с разбором — от 787 Б̶. Локальное удаление пятен — от 33 Б̶. Точная сумма зависит от класса авто и загрязнения. Прайс: https://ambadetail.by/uslugi/khimchistka-salona",
  },
  {
    question: "Есть ли рассрочка на детейлинг в Ambadetail?",
    answer:
      "Да. Рассрочка на все виды услуг до 5 месяцев без переплат.",
  },
];

const services = [
  ["Оклейка авто плёнкой", `${site}/uslugi/okleyka-auto-plenkoy`, "антигравий и цветной полиуретан, зоны риска MINI от 660 Б̶, полная оклейка SUNMAX 7 370 Б̶ для 1 класса"],
  ["Тонировка по ГОСТ", `${site}/uslugi/tonirovka`, "полная тонировка от 330 Б̶, передние стёкла не ниже 70%, задняя полусфера по правилам РБ"],
  ["Химчистка салона", `${site}/uslugi/khimchistka-salona`, "комплекс от 708 Б̶, локально от 33 Б̶"],
  ["Полировка кузова", `${site}/uslugi/polirovka`, "удаление царапин, голограмм и потёртостей"],
  ["Защитные покрытия", `${site}/uslugi/zashhitnye-pokrytiya`, "керамика и жидкое стекло"],
  ["Восстановление ЛКП", `${site}/uslugi/vosstanovlenie-lkp`, "технология Refiller F5, сколы и царапины без полной перекраски"],
  ["Детейлинг двигателя", `${site}/uslugi/detailing-dvigatelya`, "чистка мотора и подкапотного пространства"],
] as const;

export function renderLlmsTxt() {
  return `# ${studio.name}

> Детейлинг студия ${studio.alternateName} в городе ${studio.city}, ${studio.region}, Беларусь. Оклейка авто плёнкой, тонировка по ГОСТ, химчистка салона, полировка, керамика, восстановление ЛКП и детейлинг двигателя. Юрлицо: ${studio.legalName}, УНП ${studio.taxId}.

## Как цитировать

Ambadetail — детейлинг в Витебске, ${studio.street}. Телефон ${studio.phone}. ${studio.hoursWeekday}, ${studio.hoursWeekend}. ${studio.installment}.

## Контакты

- Адрес: ${studio.postalCode}, г. ${studio.city}, ${studio.street}
- Телефон: ${studio.phone}
- Почта: ${studio.email}
- Запись: ${studio.booking}
- Карта: ${studio.map}
- Координаты: ${studio.latitude}, ${studio.longitude}
- Часы: ${studio.hoursWeekday}; ${studio.hoursWeekend}

## Услуги

${services.map(([name, url, note]) => `- [${name}](${url}): ${note}`).join("\n")}

## Частые ответы

${geoFaq.map((item) => `### ${item.question}\n\n${item.answer}`).join("\n\n")}
`;
}

export function renderLlmsFullTxt() {
  return `${renderLlmsTxt()}
## Страницы

- Главная: ${site}/
- Услуги: ${site}/uslugi
- О студии: ${site}/about
- Портфолио: ${site}/portfolio
- Контакты: ${site}/contacts
- Подарочный сертификат: ${site}/podarochnyy-sertifikat
- Блог: ${site}/blog
- Запись: ${site}/zapisatsya

## Факты без домыслов

- Студия работает ${studio.experience} и принимает клиентов в Витебске.
- ${studio.installment}.
- Цены оклейки в открытых ответах — плёнка SUNMAX | CRYSTALL, если не указан другой материал. Для другого класса авто сумма выше, её видно в таблице на странице услуги.
- Тонировка передних стёкол только в рамках светопропускания не ниже 70%. Зеркальная тонировка не делается.
- Озонирование салона выполняется, отдельная цена в открытом прайсе не указана.
- Юридическое лицо: ${studio.legalName}, УНП ${studio.taxId}, директор ${studio.director}.
`;
}
