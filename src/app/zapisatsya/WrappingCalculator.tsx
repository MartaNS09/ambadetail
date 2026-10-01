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

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="52" fill="#18181b" />
      <circle cx={cx} cy={cy} r="30" fill="#3f3f46" />
      <circle cx={cx} cy={cy} r="12" fill="#e4e4e7" />
    </g>
  );
}

function zoneClass(zone: WrapZoneId, active: WrapZoneId | null, selected: Set<WrapZoneId>) {
  if (active === zone) return "wrap-car__zone wrap-car__zone--active";
  if (selected.has(zone)) return "wrap-car__zone wrap-car__zone--on";
  return "wrap-car__zone";
}

const SIDE_ZONES: { zone: WrapZoneId; d: string }[] = [
  {
    zone: "body",
    d: "M78 268 L96 206 L140 178 L268 156 L318 148 L368 92 L392 74 L708 74 L748 96 L812 148 L900 164 L952 198 L968 248 L972 308 L86 308 Z",
  },
  { zone: "bumper", d: "M70 214 L132 184 L140 292 L78 304 L58 250 Z" },
  { zone: "bumper", d: "M888 214 L958 236 L950 308 L886 296 L872 248 Z" },
  { zone: "light", d: "M86 190 L138 176 L146 210 L92 220 Z" },
  { zone: "light", d: "M78 242 L128 238 L130 262 L78 266 Z" },
  { zone: "hood", d: "M124 184 L312 150 L338 184 L148 212 Z" },
  { zone: "fenderFront", d: "M148 214 L368 192 L388 292 L132 304 L114 242 Z" },
  { zone: "glass", d: "M292 156 L358 82 L390 82 L344 172 Z" },
  { zone: "roof", d: "M396 76 L704 76 L704 106 L396 106 Z" },
  { zone: "pillar", d: "M344 90 L376 82 L408 174 L372 178 Z" },
  { zone: "door", d: "M390 178 L552 178 L552 292 L386 292 Z" },
  { zone: "door", d: "M560 178 L718 178 L718 292 L560 292 Z" },
  { zone: "mirror", d: "M412 156 L478 146 L486 180 L418 188 Z" },
  { zone: "sill", d: "M250 292 L760 292 L760 314 L250 314 Z" },
  { zone: "fenderRear", d: "M718 178 L900 196 L912 292 L718 292 Z" },
  { zone: "trunk", d: "M724 128 L888 152 L868 184 L714 170 Z" },
  { zone: "spoiler", d: "M846 136 L918 154 L904 170 L838 154 Z" },
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
        <svg className="wrap-side" viewBox="0 0 1000 420" role="img" aria-label="Схема седана, вид сбоку">
          <ellipse cx="500" cy="352" rx="400" ry="16" fill="rgba(0,0,0,0.35)" />
          <path
            className="wrap-side__body"
            d="M78 268 L96 206 L140 178 L268 156 L318 148 L368 92 L392 74 L708 74 L748 96 L812 148 L900 164 L952 198 L968 248 L972 308 L86 308 Z"
          />
          <path className="wrap-side__glass" d="M300 150 L358 84 L392 84 L348 168 Z" />
          <path className="wrap-side__glass" d="M408 104 L690 104 L712 168 L400 170 Z" />
          <path className="wrap-side__glass" d="M724 118 L808 152 L760 170 L708 170 Z" />
          <g className="wrap-side__lines" aria-hidden="true">
            <path d="M390 178 H718" />
            <path d="M552 178 V292" />
            <path d="M250 292 H760" />
          </g>
          {SIDE_ZONES.map((item, index) => (
            <path
              key={`${item.zone}-${index}`}
              className={zoneClass(item.zone, activeZone, selectedZones)}
              d={item.d}
              onClick={() => toggleZone(item.zone)}
            />
          ))}
          <g className="wrap-side__wheel">
            <Wheel cx={230} cy={304} />
            <Wheel cx={770} cy={304} />
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
