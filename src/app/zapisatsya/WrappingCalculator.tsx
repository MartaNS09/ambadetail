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
          viewBox="0 0 760 320"
          role="img"
          aria-label="Схема кузова"
        >
          <ellipse cx="210" cy="248" rx="46" ry="46" className="wrap-car__wheel" />
          <ellipse cx="548" cy="248" rx="46" ry="46" className="wrap-car__wheel" />
          <ellipse cx="210" cy="248" rx="22" ry="22" className="wrap-car__hub" />
          <ellipse cx="548" cy="248" rx="22" ry="22" className="wrap-car__hub" />

          <path
            className={zoneClass("body", activeZone, selectedZones)}
            d="M150 118 L392 78 L700 132 L690 210 L118 214 L150 150 Z"
            onClick={() => toggleZone("body")}
          />
          <path
            className={zoneClass("bumper", activeZone, selectedZones)}
            d="M78 168 L118 150 L132 188 L118 230 L78 214 Z"
            onClick={() => toggleZone("bumper")}
          />
          <path
            className={zoneClass("light", activeZone, selectedZones)}
            d="M118 154 L156 146 L150 176 L120 178 Z"
            onClick={() => toggleZone("light")}
          />
          <path
            className={zoneClass("hood", activeZone, selectedZones)}
            d="M150 146 L292 118 L300 168 L156 176 Z"
            onClick={() => toggleZone("hood")}
          />
          <path
            className={zoneClass("fenderFront", activeZone, selectedZones)}
            d="M132 188 L168 176 L196 176 L210 210 L168 230 L132 214 Z"
            onClick={() => toggleZone("fenderFront")}
          />
          <path
            className={zoneClass("glass", activeZone, selectedZones)}
            d="M300 120 L392 78 L388 150 L304 168 Z"
            onClick={() => toggleZone("glass")}
          />
          <path
            className={zoneClass("roof", activeZone, selectedZones)}
            d="M392 78 L590 78 L612 118 L388 118 Z"
            onClick={() => toggleZone("roof")}
          />
          <path
            className={zoneClass("pillar", activeZone, selectedZones)}
            d="M388 118 L404 150 L392 168 L300 168 L304 150 Z"
            onClick={() => toggleZone("pillar")}
          />
          <path
            className={zoneClass("door", activeZone, selectedZones)}
            d="M300 176 L470 168 L470 228 L292 228 Z"
            onClick={() => toggleZone("door")}
          />
          <path
            className={zoneClass("door", activeZone, selectedZones)}
            d="M478 168 L612 160 L628 228 L478 228 Z"
            onClick={() => toggleZone("door")}
          />
          <path
            className={zoneClass("mirror", activeZone, selectedZones)}
            d="M392 132 L438 124 L438 146 L396 150 Z"
            onClick={() => toggleZone("mirror")}
          />
          <path
            className={zoneClass("fenderRear", activeZone, selectedZones)}
            d="M612 160 L668 168 L690 210 L640 232 L600 210 L612 176 Z"
            onClick={() => toggleZone("fenderRear")}
          />
          <path
            className={zoneClass("trunk", activeZone, selectedZones)}
            d="M612 118 L700 132 L690 168 L612 160 Z"
            onClick={() => toggleZone("trunk")}
          />
          <path
            className={zoneClass("spoiler", activeZone, selectedZones)}
            d="M668 108 L724 102 L720 118 L690 124 Z"
            onClick={() => toggleZone("spoiler")}
          />
          <path
            className={zoneClass("sill", activeZone, selectedZones)}
            d="M196 228 L640 228 L640 242 L196 242 Z"
            onClick={() => toggleZone("sill")}
          />
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
