"use client";

import { useMemo, useState } from "react";
import {
  formatByn,
  priceForClass,
  WRAPPING_CALC_ITEMS,
  type WrapCalcItem,
} from "@/lib/okleyka-works";
import "./WrappingCalculator.scss";

type Tab = "full" | "partial";

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

  return (
    <section className="wrap-calc" aria-label="Калькулятор стоимости оклейки">
      <div className="wrap-calc__panel">
        <p className="wrap-calc__eyebrow">Калькулятор стоимости</p>
        <h2 className="wrap-calc__title">Выберите зоны оклейки</h2>
        <p className="wrap-calc__lead">
          Отмечайте зоны в списке. Цены — SUNMAX | CRYSTALL,{" "}
          {hasModel ? `${classNumber} класс` : "1 класс"}.
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
                ? "0 Б̶"
                : `${hasEstimate ? "от " : ""}${formatByn(total)}`}
            </strong>
          </div>
          <button type="button" onClick={onClear} disabled={selected.length === 0}>
            Сбросить
          </button>
        </div>
        {preview && (
          <p className="wrap-calc__preview">
            {preview.name} — {priceLabel(preview)}
          </p>
        )}
        {error && <p className="wrap-calc__error">{error}</p>}
        <p className="wrap-calc__note">
          {hasModel
            ? "Итог предварительный: точная цена зависит от плёнки и сложности авто."
            : "Выберите марку и модель в форме — сумма пересчитается по классу автомобиля."}
        </p>
      </div>
    </section>
  );
}
