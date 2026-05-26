"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail, ChevronRight } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTelegramPlane,
  FaVk,
} from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const popularServices = [
    "Детейлинг авто",
    "Детейлинг двигателя",
    "Полировка авто",
    "Защитные покрытия",
    "Восстановление ЛКП",
    "Оклейка антигравийной плёнкой",
    "Тонировка авто",
    "Химчистка салона",
  ];

  const quickLinks = [
    { name: "Главная", href: "/", icon: "🏠" },
    { name: "Все услуги", href: "/services", icon: "🔧" },
    { name: "Наши работы", href: "/portfolio", icon: "📷" },
    { name: "О компании", href: "/about", icon: "ℹ️" },
    { name: "Контакты", href: "/contacts", icon: "📞" },
    { name: "Политика конфиденциальности", href: "/privacy", icon: "📜" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <Link href="/" className="footer__logo">
              <span className="footer__logo-letter">A</span>
              <span className="footer__logo-letter">M</span>
              <span className="footer__logo-letter">B</span>
              <span className="footer__logo-letter">A</span>
              <span className="footer__logo-service">DETAIL</span>
            </Link>

            <div className="footer__contacts">
              <div className="footer__contact-item">
                <Phone size={16} />
                <a href="tel:+375292230322">+375 29 223 03 22</a>
              </div>
              <div className="footer__contact-item">
                <Clock size={16} />
                <div>
                  <div>Пн - Пт: 10:00 - 19:00</div>
                  <div>Сб - Вс: 10:00 - 17:00</div>
                </div>
              </div>
              <div className="footer__contact-item">
                <MapPin size={16} />
                <span>210020, г.Витебск, ул.П.Бровки 6 A</span>
              </div>
              <div className="footer__contact-item">
                <Mail size={16} />
                <a href="mailto:info@ambadetail.by">info@ambadetail.by</a>
              </div>
            </div>

            <button onClick={scrollToTop} className="footer__scroll-top-btn">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              <span>Наверх</span>
            </button>

            <div className="footer__requisites">
              <h4 className="footer__title">Реквизиты компании</h4>
              <p>ООО «СервисЛинк»</p>
              <p>УНП 392001662</p>
              <p>г. Витебск, ул. П. Бровки, 6А</p>
              <p>Директор: Усенко А.М.</p>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Популярные услуги</h4>
            <ul className="footer__list">
              {popularServices.map((service, idx) => (
                <li key={idx}>
                  <Link href="/services" className="footer__link">
                    <ChevronRight size={12} />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Быстрые ссылки</h4>
            <ul className="footer__list">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="footer__link">
                    <span className="footer__link-icon">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Мы в соцсетях</h4>
            <div className="footer__social">
              <a
                href="https://instagram.com/ambadetail"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link" aria-label=""
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@ambadetail"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link" aria-label=""
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://youtube.com/@ambadetail"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link" aria-label=""
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://t.me/ambadetail"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link" aria-label=""
              >
                <FaTelegramPlane size={20} />
              </a>
              <a
                href="https://vk.com/ambadetail"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link" aria-label=""
              >
                <FaVk size={20} />
              </a>
            </div>
            <p className="footer__subscribe-text">
              Подписывайтесь, чтобы быть в курсе новостей!
            </p>

            <div className="footer__contact-form">
              <h4 className="footer__title">Свяжитесь с нами</h4>
              <p className="footer__contact-text">
                Есть вопросы? Оставьте заявку, и наш менеджер свяжется с вами в
                ближайшее время.
              </p>
              <a href="mailto:info@ambadetail.by" className="footer__email-btn">
                <Mail size={16} />
                <span>Написать нам</span>
              </a>
            </div>

            <div className="footer__advantages">
              <h4 className="footer__title">Почему выбирают нас</h4>
              <ul className="footer__list">
                <li>✓ Профессиональное оборудование</li>
                <li>✓ Опытные специалисты</li>
                <li>✓ Гарантия качества работ</li>
                <li>✓ Индивидуальный подход</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Платежные системы - исправлено с Image */}
        <div className="footer__payment">
          <h4 className="footer__title">Принимаем к оплате</h4>
          <div className="footer__payment-icons">
            <div className="footer__payment-item">
              <Image
                src="/images/payment-icon/visa.webp"
                alt="Visa"
                width={45}
                height={30}
                className="footer__payment-img"
              />
            </div>
            <div className="footer__payment-item">
              <Image
                src="/images/payment-icon/mastercard.webp"
                alt="Mastercard"
                width={45}
                height={30}
                className="footer__payment-img"
              />
            </div>
            <div className="footer__payment-item">
              <span>МИР</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © {currentYear} Ambadetail. Все права защищены.
          </div>
          <div className="footer__developer">
            Разработка сайта{" "}
            <a
              href="https://apsod.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__dev-link"
            >
              Apsod
            </a>
          </div>
          <Link href="/privacy" className="footer__privacy">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
