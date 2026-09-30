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
    d: "M155 430 L210 355 L340 315 L490 275 L575 235 L650 210 L785 218 L865 258 L925 345 L910 455 L835 515 L660 532 L450 518 L260 495 L165 460 Z",
  },
  {
    zone: "hood",
    d: "M285 375 L365 315 L525 288 L585 348 L520 405 L305 415 Z",
  },
  {
    zone: "bumper",
    d: "M162 428 L255 398 L420 412 L452 468 L385 515 L205 505 L155 468 Z",
  },
  {
    zone: "bumper",
    d: "M858 418 L922 398 L938 462 L888 502 L842 468 Z",
  },
  {
    zone: "light",
    d: "M355 368 L528 400 L508 436 L348 408 Z",
  },
  {
    zone: "light",
    d: "M172 408 L268 382 L282 424 L182 444 Z",
  },
  {
    zone: "fenderFront",
    d: "M498 338 L655 322 L682 425 L618 472 L515 448 L488 388 Z",
  },
  {
    zone: "glass",
    d: "M448 272 L625 232 L695 318 L518 348 Z",
  },
  {
    zone: "roof",
    d: "M525 212 L765 218 L732 258 L515 252 Z",
  },
  {
    zone: "pillar",
    d: "M588 228 L652 218 L705 312 L638 322 Z",
  },
  {
    zone: "door",
    d: "M668 292 L822 318 L800 452 L652 422 Z",
  },
  {
    zone: "mirror",
    d: "M688 258 L762 248 L772 292 L698 302 Z",
  },
  {
    zone: "fenderRear",
    d: "M798 322 L912 362 L888 472 L788 438 Z",
  },
  {
    zone: "trunk",
    d: "M755 258 L882 292 L848 352 L738 322 Z",
  },
  {
    zone: "spoiler",
    d: "M838 268 L912 302 L894 322 L828 294 Z",
  },
  {
    zone: "sill",
    d: "M648 448 L832 482 L810 512 L638 478 Z",
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
        <div
          className={
            activeZone === "body" || selectedZones.has("body")
              ? "wrap-photo wrap-photo--body"
              : "wrap-photo"
          }
        >
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
