"use client";

import { useMemo, useState } from "react";
import {
  formatByn,
  priceForClass,
  WRAPPING_CALC_ITEMS,
  type WrapCalcItem,
  type WrapZoneId,
} from "@/lib/okleyka-works";
import "./WrappingCalculator.scss";

type Tab = "full" | "partial";

function zoneClass(zone: WrapZoneId, active: WrapZoneId | null, selected: Set<WrapZoneId>) {
  if (active === zone) return "wrap-car__zone wrap-car__zone--active";
  if (selected.has(zone)) return "wrap-car__zone wrap-car__zone--on";
  return "wrap-car__zone";
}

const PHOTO_ZONES: { zone: WrapZoneId; d: string }[] = [
  {
    zone: "body",
    d: "M158 468 L188 390 L260 340 L400 305 L510 240 L600 198 L735 205 L805 252 L848 325 L846 425 L790 462 L680 495 L520 535 L250 528 L155 492 Z",
  },
  {
    zone: "hood",
    d: "M205 378 L245 338 L330 314 L490 304 L600 320 L625 358 L575 392 L480 410 L350 422 L240 410 L198 392 Z",
  },
  {
    zone: "bumper",
    d: "M148 458 L210 438 L420 448 L495 485 L475 535 L185 528 L142 495 Z",
  },
  {
    zone: "bumper",
    d: "M818 428 L848 418 L846 462 L812 455 Z",
  },
  {
    zone: "light",
    d: "M158 405 L230 388 L242 448 L155 458 Z",
  },
  {
    zone: "light",
    d: "M530 388 L642 410 L618 442 L505 420 Z",
  },
  {
    zone: "fenderFront",
    d: "M640 316 L735 304 L752 368 L700 412 L638 392 L622 348 Z",
  },
  {
    zone: "glass",
    d: "M425 305 L535 235 L655 242 L685 308 L490 315 Z",
  },
  {
    zone: "roof",
    d: "M555 198 L725 206 L755 242 L525 232 Z",
  },
  {
    zone: "pillar",
    d: "M635 238 L678 226 L712 302 L662 310 Z",
  },
  {
    zone: "door",
    d: "M700 306 L808 328 L792 436 L688 418 Z",
  },
  {
    zone: "mirror",
    d: "M705 282 L758 274 L766 312 L708 316 Z",
  },
  {
    zone: "fenderRear",
    d: "M800 314 L828 334 L822 382 L798 404 L782 368 L788 330 Z",
  },
  {
    zone: "trunk",
    d: "M790 268 L842 298 L822 342 L768 318 Z",
  },
  {
    zone: "spoiler",
    d: "M808 255 L845 275 L832 295 L798 275 Z",
  },
  {
    zone: "sill",
    d: "M675 445 L785 462 L770 485 L665 468 Z",
  },
];

export default function WrappingCalculator({
  classNumber,
  hasModel,
  selectedIds,
  error,
  onToggle,
  onClear,
}: {
  classNumber: number;
  hasModel: boolean;
  selectedIds: string[];
  error: string;
  onToggle: (id: string) => void;
  onClear: () => void;
}) {
  const [tab, setTab] = useState<Tab>("full");
  const [hoverId, setHoverId] = useState<string | null>(null);

  const items = WRAPPING_CALC_ITEMS.filter((item) => item.tab === tab);
  const selected = useMemo(
    () => WRAPPING_CALC_ITEMS.filter((item) => selectedIds.includes(item.id)),
    [selectedIds],
  );
  const hovered = WRAPPING_CALC_ITEMS.find((item) => item.id === hoverId) ?? null;
  const preview = hovered ?? selected[selected.length - 1] ?? null;
  const activeZone = preview?.zone ?? null;
  const selectedZones = new Set(selected.map((item) => item.zone));

  const total = selected.reduce((sum, item) => {
    const price = priceForClass(item, classNumber);
    return price == null ? sum : sum + price;
  }, 0);
  const hasEstimate = selected.some((item) => item.from);

  const priceLabel = (item: WrapCalcItem) => {
    const price = priceForClass(item, classNumber);
    if (price == null) return "Уточняется";
    return `${item.from ? "от " : ""}${formatByn(price)}`;
  };

  const toggleZone = (zone: WrapZoneId) => {
    const match = items.find((item) => item.zone === zone);
    if (match) onToggle(match.id);
  };

  return (
    <section className="wrap-calc" aria-label="Калькулятор стоимости оклейки">
      <div className="wrap-calc__panel">
        <p className="wrap-calc__eyebrow">Калькулятор стоимости</p>
        <h2 className="wrap-calc__title">Выберите зоны оклейки</h2>
        <p className="wrap-calc__lead">
          Нажимайте на детали автомобиля или отмечайте их в списке. Цены —
          SUNMAX | CRYSTALL, {hasModel ? `${classNumber} класс` : "1 класс"}.
        </p>
        <div className="wrap-calc__tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "full"}
            className={tab === "full" ? "is-active" : ""}
            onClick={() => setTab("full")}
          >
            Полная
            <span>Оклейка целого элемента</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "partial"}
            className={tab === "partial" ? "is-active" : ""}
            onClick={() => setTab("partial")}
          >
            Частичная
            <span>Локальная защита зон</span>
          </button>
        </div>
        <ul className="wrap-calc__list">
          {items.map((item) => {
            const checked = selectedIds.includes(item.id);
            return (
              <li key={item.id}>
                <label
                  className={checked ? "is-checked" : ""}
                  onMouseEnter={() => setHoverId(item.id)}
                  onMouseLeave={() => setHoverId(null)}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggle(item.id)}
                  />
                  <span>{item.name}</span>
                  <strong>{priceLabel(item)}</strong>
                </label>
              </li>
            );
          })}
        </ul>
        <div className="wrap-calc__total">
          <div>
            <span>Ориентир</span>
            <strong>
              {selected.length === 0
                ? "0 BYN"
                : `${hasEstimate ? "от " : ""}${formatByn(total)}`}
            </strong>
          </div>
          <button type="button" onClick={onClear} disabled={selected.length === 0}>
            Сбросить
          </button>
        </div>
        {error && <p className="wrap-calc__error">{error}</p>}
        <p className="wrap-calc__note">
          {hasModel
            ? "Итог предварительный: точная цена зависит от плёнки и сложности авто."
            : "Выберите марку и модель в форме — сумма пересчитается по классу автомобиля."}
        </p>
      </div>

      <div className="wrap-calc__stage">
        <p className="wrap-calc__zone-title">
          {preview ? preview.name : "Выберите деталь"}
        </p>
        <div className="wrap-photo">
          <img src="/wrap-sedan.jpg" alt="Белый седан" />
          <svg viewBox="0 0 1024 768" preserveAspectRatio="none" aria-hidden="true">
            {PHOTO_ZONES.map((item, index) => (
              <path
                key={`${item.zone}-${index}`}
                className={zoneClass(item.zone, activeZone, selectedZones)}
                d={item.d}
                onClick={() => toggleZone(item.zone)}
              />
            ))}
          </svg>
        </div>

        <p className="wrap-calc__stage-hint">
          {preview
            ? priceLabel(preview)
            : "Выберите деталь на автомобиле или в списке слева."}
        </p>
      </div>
    </section>
  );
}
