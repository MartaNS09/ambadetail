"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Phone } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import "./MobileBottomNav.scss";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Главная", href: "/", icon: Home, isExternal: false },
    {
      name: "Портфолио",
      href: "/portfolio",
      icon: Briefcase,
      isExternal: false,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/375292230322",
      icon: FaWhatsapp,
      isExternal: true,
    },
    {
      name: "Telegram",
      href: "https://t.me/+375292230322",
      icon: FaTelegramPlane,
      isExternal: true,
    },
    {
      name: "Звонок",
      href: "tel:+375292230322",
      icon: Phone,
      isExternal: true,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    if (href.startsWith("http") || href.startsWith("tel")) return false;
    return pathname.startsWith(href);
  };

  return (
    <nav className="mobile-bottom-nav">
      <div className="mobile-bottom-nav__inner">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          if (item.isExternal) {
            return (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mobile-bottom-nav__item"
              >
                <Icon size={22} className="mobile-bottom-nav__icon" />
                <span className="mobile-bottom-nav__label">{item.name}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-bottom-nav__item ${active ? "mobile-bottom-nav__item--active" : ""}`}
            >
              <Icon
                size={22}
                className={`mobile-bottom-nav__icon ${active ? "mobile-bottom-nav__icon--active" : ""}`}
              />
              <span className="mobile-bottom-nav__label">{item.name}</span>
              {active && <span className="mobile-bottom-nav__active-dot" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
