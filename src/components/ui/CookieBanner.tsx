"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import "./CookieBanner.scss";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем согласие при загрузке
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie-consent");
      const consentExpiry = localStorage.getItem("cookie-consent-expiry");

      // Если согласия нет или оно истекло (30 дней)
      if (!consent) {
        setIsVisible(true);
      } else if (
        consentExpiry &&
        new Date().getTime() > parseInt(consentExpiry)
      ) {
        // Согласие истекло, спрашиваем снова
        localStorage.removeItem("cookie-consent");
        localStorage.removeItem("cookie-consent-expiry");
        setIsVisible(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    // Сохраняем согласие на 30 дней
    const expiry = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-consent-expiry", expiry.toString());
    setIsVisible(false);
  };

  const declineCookies = () => {
    // Сохраняем отказ на 7 дней
    const expiry = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem("cookie-consent", "declined");
    localStorage.setItem("cookie-consent-expiry", expiry.toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <div className="cookie-banner__icon">
          <Cookie size={22} />
        </div>
        <div className="cookie-banner__text">
          <p>
            🍪 Мы используем cookie для улучшения работы сайта.
            <Link href="/privacy"> Подробнее о политике</Link>
          </p>
          <div className="cookie-banner__buttons">
            <button onClick={acceptCookies} className="cookie-banner__accept">
              Принять
            </button>
            <button onClick={declineCookies} className="cookie-banner__decline">
              Отклонить
            </button>
          </div>
        </div>
        <button
          onClick={declineCookies}
          className="cookie-banner__close"
          aria-label="Закрыть"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
