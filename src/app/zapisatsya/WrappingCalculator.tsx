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

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  const spokes = Array.from({ length: 12 }, (_, index) => {
    const angle = (index / 12) * Math.PI * 2 - Math.PI / 2;
    return {
      x2: cx + Math.cos(angle) * 30,
      y2: cy + Math.sin(angle) * 30,
    };
  });

  return (
    <g className="wrap-car__static">
      <circle cx={cx} cy={cy} r="62" className="wrap-car__tire" />
      <circle cx={cx} cy={cy} r="48" className="wrap-car__rim" />
      {spokes.map((spoke, index) => (
        <line
          key={index}
          x1={cx}
          y1={cy}
          x2={spoke.x2}
          y2={spoke.y2}
          className="wrap-car__spoke"
        />
      ))}
      <circle cx={cx} cy={cy} r="13" className="wrap-car__hub" />
    </g>
  );
}

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
        <svg
          className={
            activeZone === "body" || selectedZones.has("body")
              ? "wrap-car wrap-car--body"
              : "wrap-car"
          }
          viewBox="0 0 1000 420"
          role="img"
          aria-label="Седан, вид сбоку"
        >
          <defs>
            <linearGradient id="wrap-paint" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="46%" stopColor="#d7dee7" />
              <stop offset="100%" stopColor="#8b97a8" />
            </linearGradient>
            <linearGradient id="wrap-glass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#0b1220" />
            </linearGradient>
          </defs>

          <ellipse cx="500" cy="392" rx="380" ry="10" className="wrap-car__shadow" />

          <path
            className="wrap-car__paint"
            d="M100 318 L74 262 C68 228 78 190 116 170 L176 156 L424 136 C456 124 478 94 514 64 L546 48 L702 42 C744 44 770 68 794 108 L776 128 L904 136 L952 152 L966 204 L956 292 L928 318 L834 320 A74 74 0 0 0 686 320 L354 320 A74 74 0 0 0 206 320 L100 318 Z"
          />

          <path
            className="wrap-car__glass"
            d="M448 130 L520 62 L552 48 L534 112 L462 124 Z"
          />
          <path
            className="wrap-car__glass"
            d="M560 52 L694 44 L762 100 L706 116 L568 112 Z"
          />

          <Wheel cx={280} cy={320} />
          <Wheel cx={760} cy={320} />

          <path
            className={zoneClass("body", activeZone, selectedZones)}
            d="M100 318 L74 262 C68 228 78 190 116 170 L176 156 L424 136 C456 124 478 94 514 64 L546 48 L702 42 C744 44 770 68 794 108 L776 128 L904 136 L952 152 L966 204 L956 292 L928 318 L834 320 A74 74 0 0 0 686 320 L354 320 A74 74 0 0 0 206 320 L100 318 Z"
            onClick={() => toggleZone("body")}
          />
          <path
            className={zoneClass("bumper", activeZone, selectedZones)}
            d="M70 214 C52 246 58 292 86 312 L188 318 L176 236 C140 222 100 210 74 200 Z"
            onClick={() => toggleZone("bumper")}
          />
          <path
            className={zoneClass("bumper", activeZone, selectedZones)}
            d="M922 210 L980 232 L966 292 L910 308 L888 246 Z"
            onClick={() => toggleZone("bumper")}
          />
          <path
            className={zoneClass("light", activeZone, selectedZones)}
            d="M112 172 L188 160 L178 196 L118 204 Z"
            onClick={() => toggleZone("light")}
          />
          <path
            className={zoneClass("hood", activeZone, selectedZones)}
            d="M156 188 L168 158 L400 136 L414 186 L210 208 Z"
            onClick={() => toggleZone("hood")}
          />
          <path
            className={zoneClass("fenderFront", activeZone, selectedZones)}
            d="M176 210 L400 184 L368 248 L354 320 A74 74 0 0 0 206 320 L148 292 L140 236 Z"
            onClick={() => toggleZone("fenderFront")}
          />
          <path
            className={zoneClass("glass", activeZone, selectedZones)}
            d="M448 130 L520 62 L552 48 L534 112 L462 124 Z"
            onClick={() => toggleZone("glass")}
          />
          <path
            className={zoneClass("roof", activeZone, selectedZones)}
            d="M530 52 L720 44 L752 78 L548 84 Z"
            onClick={() => toggleZone("roof")}
          />
          <path
            className={zoneClass("pillar", activeZone, selectedZones)}
            d="M506 68 L540 52 L528 116 L494 110 Z"
            onClick={() => toggleZone("pillar")}
          />
          <path
            className={zoneClass("door", activeZone, selectedZones)}
            d="M400 176 L575 160 L588 300 L360 308 L354 250 L392 190 Z"
            onClick={() => toggleZone("door")}
          />
          <path
            className={zoneClass("door", activeZone, selectedZones)}
            d="M582 158 L730 140 L748 236 L718 300 L592 304 Z"
            onClick={() => toggleZone("door")}
          />
          <path
            className={zoneClass("mirror", activeZone, selectedZones)}
            d="M498 108 L564 92 L570 118 L508 128 Z"
            onClick={() => toggleZone("mirror")}
          />
          <path
            className={zoneClass("fenderRear", activeZone, selectedZones)}
            d="M730 156 L860 140 L910 198 L834 248 L834 320 A74 74 0 0 0 686 320 L710 300 L742 220 Z"
            onClick={() => toggleZone("fenderRear")}
          />
          <path
            className={zoneClass("trunk", activeZone, selectedZones)}
            d="M760 86 L922 148 L892 170 L748 116 Z"
            onClick={() => toggleZone("trunk")}
          />
          <path
            className={zoneClass("spoiler", activeZone, selectedZones)}
            d="M888 124 L968 142 L954 156 L878 140 Z"
            onClick={() => toggleZone("spoiler")}
          />
          <path
            className={zoneClass("sill", activeZone, selectedZones)}
            d="M360 298 L680 298 L680 316 L360 316 Z"
            onClick={() => toggleZone("sill")}
          />

          <g className="wrap-car__static">
            <path
              className="wrap-car__line"
              d="M150 196 C320 176 560 164 780 150 L910 162"
            />
            <path className="wrap-car__line" d="M575 160 L588 304" />
            <path className="wrap-car__line" d="M730 142 L718 296" />
            <path className="wrap-car__handle" d="M500 214 h24 v8 h-24 Z" />
            <path className="wrap-car__handle" d="M650 204 h24 v8 h-24 Z" />
            <path className="wrap-car__lamp" d="M948 196 h26 v18 h-32 Z" />
            <path className="wrap-car__exhaust" d="M900 336 h16 v10 h-16 Z" />
            <path className="wrap-car__exhaust" d="M922 336 h16 v10 h-16 Z" />
          </g>
        </svg>
        <p className="wrap-calc__stage-hint">
          {preview
            ? priceLabel(preview)
            : "Выберите деталь на автомобиле или в списке слева."}
        </p>
      </div>
    </section>
  );
}
