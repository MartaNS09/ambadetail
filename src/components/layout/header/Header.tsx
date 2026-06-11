"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import ThemeToggle from "@/components/ui/ThemeToggle";
import TimeDisplay from "@/components/ui/TimeDisplay";
import "./Header.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Выпадающее меню для услуг
  const servicesItems = [
    { name: "Все услуги", href: "/uslugi" },
    {
      name: "Оклейка антигравийной плёнкой",
      href: "/uslugi/okleyka-auto-plenkoy",
    },
    {
      name: "Восстановление ЛКП по технологии Refiller F5",
      href: "/uslugi/vosstanovlenie-lkp",
    },
    { name: "Детейлинг химчистка салона", href: "/uslugi/khimchistka-salona" },
    { name: "Детейлинг полировка авто", href: "/uslugi/polirovka" },
    {
      name: "Нанесение защитных покрытий",
      href: "/uslugi/zashhitnye-pokrytiya",
    },
    { name: "Тонировка", href: "/uslugi/tonirovka" },
    { name: "Химчистка двигателя", href: "/uslugi/detailing-dvigatelya" },
  ];

  // Открытие при наведении
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  // Закрываем меню при скролле
  useEffect(() => {
    const handleScroll = () => {
      if (isServicesOpen) setIsServicesOpen(false);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isServicesOpen]);

  // Закрываем меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Блокировка скролла при открытом бургер-меню (исправленная версия)
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  // Очистка таймера при размонтировании
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/uslugi", hasDropdown: true },
    { name: "Портфолио", href: "/portfolio" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__top">
        <div className="container">
          <div className="header__contacts">
            <div className="header__contacts-left">
              <div className="header__address">
                <MapPin size={14} />
                <span>210020, г.Витебск, ул.П.Бровки 6 A</span>
              </div>
              <a href="tel:+375292230322" className="header__phone-link">
                <Phone size={14} />
                <span>+375 29 223 03 22</span>
              </a>
            </div>
            <div className="header__contacts-right">
              <a
                href="https://www.instagram.com/ambassador__detailing?igsh=MXRwaXRtaGV4c2hlYg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="header__social-link"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@ambassador___detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="header__social-link"
                aria-label="TikTok"
              >
                <FaTiktok size={16} />
              </a>
              <TimeDisplay />
            </div>
          </div>
        </div>
      </div>

      <div className="header__main">
        <div className="container">
          <div className="header__content">
            <button
              ref={menuButtonRef}
              className={`header__menu-toggle ${isMenuOpen ? "header__menu-toggle--active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
              <span className="header__menu-icon"></span>
            </button>

            <Link href="/" className="header__logo" aria-label="AMBADETAIL">
              <div className="header__logo-wrapper">
                <span className="header__logo-letter">A</span>
                <span className="header__logo-letter">M</span>
                <span className="header__logo-letter">B</span>
                <span className="header__logo-letter">A</span>
                <span className="header__logo-service">DETAIL</span>
              </div>
            </Link>

            <nav className="header__nav" aria-label="Основная навигация">
              <ul className="header__nav-list">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="header__nav-item"
                    onMouseEnter={
                      item.hasDropdown ? handleMouseEnter : undefined
                    }
                    onMouseLeave={
                      item.hasDropdown ? handleMouseLeave : undefined
                    }
                  >
                    {item.hasDropdown ? (
                      <div
                        ref={dropdownRef}
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <Link
                          href={item.href}
                          className={`header__nav-link header__nav-link--dropdown ${isServicesOpen ? "header__nav-link--active" : ""}`}
                          aria-expanded={isServicesOpen}
                          aria-haspopup="true"
                          aria-label="Открыть меню услуг"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={14}
                            className={`header__nav-chevron ${isServicesOpen ? "header__nav-chevron--open" : ""}`}
                          />
                        </Link>
                        {isServicesOpen && (
                          <div
                            className="header__dropdown"
                            role="menu"
                            aria-label="Подменю услуг"
                          >
                            <div className="header__dropdown-inner">
                              {servicesItems.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="header__dropdown-link"
                                  role="menuitem"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={item.href} className="header__nav-link">
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <ThemeToggle />
            </nav>

            <div className="header__mobile-icons">
              <a
                href="https://www.instagram.com/ambassador__detailing?igsh=MXRwaXRtaGV4c2hlYg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="header__mobile-icon"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@ambassador___detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="header__mobile-icon"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`header__nav-mobile ${isMenuOpen ? "header__nav-mobile--open" : ""}`}
      >
        <div className="container">
          <div className="header__nav-mobile-inner">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className="header__mobile-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                    <div className="header__mobile-dropdown">
                      {servicesItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="header__mobile-dropdown-link"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="header__mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            <div className="header__mobile-social">
              <a
                href="https://www.instagram.com/ambassador__detailing?igsh=MXRwaXRtaGV4c2hlYg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="header__mobile-social-link"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@ambassador___detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="header__mobile-social-link"
                aria-label="TikTok"
              >
                <FaTiktok size={22} />
                <span>TikTok</span>
              </a>
            </div>
            <a
              href="tel:+375292230322"
              className="header__mobile-phone"
              aria-label="Позвонить"
            >
              <Phone size={20} />
              <span>+375 29 223 03 22</span>
            </a>
            <div className="header__mobile-address">
              <MapPin size={20} />
              <span>210020, г.Витебск, ул.П.Бровки 6 A</span>
            </div>
            <a
              href="mailto:info@ambadetail.by"
              className="header__mobile-email"
              aria-label="Написать письмо"
            >
              <Mail size={20} />
              <span>info@ambadetail.by</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
