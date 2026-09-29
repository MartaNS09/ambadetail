"use client";

import Link from "next/link";
import {
  Shield,
  Cookie,
  Home,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  CheckCircle,
  Settings,
  Eye,
  Database,
  Globe,
} from "lucide-react";
import "./page.scss";

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="privacy-page">
      <div className="container">
        {/* Навигация */}
        <nav className="privacy-nav-top">
          <Link href="/" className="privacy-back-button">
            <Home size={18} />
            <span>Вернуться на главную</span>
          </Link>
        </nav>

        {/* Заголовок */}
        <header className="privacy-header">
          <div className="privacy-title-wrapper">
            <div className="privacy-icon-wrapper">
              <Shield size={48} />
            </div>
            <div className="privacy-title-content">
              <h1 className="privacy-title">
                Политика обработки персональных данных и файлов cookie
              </h1>
              <div className="privacy-meta">
                <span className="privacy-badge">Ambadetail</span>
                <span className="privacy-date">Актуально с {currentDate}</span>
              </div>
            </div>
          </div>

          <div className="privacy-alert">
            <AlertCircle size={24} />
            <div className="privacy-alert-text">
              <p className="privacy-alert-title">
                Информация для пользователей
              </p>
              <p className="privacy-alert-description">
                На этой странице объясняется, как мы используем файлы cookie и
                обрабатываем персональные данные в соответствии с
                законодательством Республики Беларусь.
              </p>
            </div>
          </div>
        </header>

        {/* Основной контент */}
        <main className="privacy-main-content">
          {/* Раздел 1 - Что такое cookie */}
          <section className="privacy-section">
            <div className="privacy-section-title">
              <Cookie size={28} />
              <h2>Что такое файлы cookie</h2>
            </div>
            <p className="privacy-section-text">
              Файлы cookie — это небольшие текстовые файлы, которые сохраняются
              на вашем устройстве (компьютере, планшете, смартфоне) при
              посещении веб-сайтов. Они помогают сайту запоминать ваши действия
              и предпочтения на определенный период времени.
            </p>

            <div className="privacy-features">
              <div className="privacy-feature">
                <CheckCircle size={20} />
                <span>Обеспечение корректной работы сайта</span>
              </div>
              <div className="privacy-feature">
                <CheckCircle size={20} />
                <span>Запоминание ваших предпочтений и настроек</span>
              </div>
              <div className="privacy-feature">
                <CheckCircle size={20} />
                <span>Анализ посещаемости для улучшения сайта</span>
              </div>
            </div>
          </section>

          {/* Раздел 2 - Типы cookie */}
          <section className="privacy-section">
            <h2 className="privacy-section-title">Типы используемых cookie</h2>

            <div className="privacy-cards">
              <div className="privacy-card privacy-card--green">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon privacy-card-icon--green">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="privacy-card-title">Необходимые</h3>
                    <span className="privacy-card-badge privacy-card-badge--green">
                      Обязательные для работы
                    </span>
                  </div>
                </div>
                <p className="privacy-card-content">
                  Эти cookie необходимы для базовой функциональности сайта.
                  Обеспечивают безопасность, управление сессиями.
                </p>
              </div>

              <div className="privacy-card privacy-card--blue">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon privacy-card-icon--blue">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h3 className="privacy-card-title">Функциональные</h3>
                    <span className="privacy-card-badge privacy-card-badge--blue">
                      Для вашего удобства
                    </span>
                  </div>
                </div>
                <p className="privacy-card-content">
                  Запоминают ваши настройки: выбранную тему оформления,
                  предпочтения по отображению информации.
                </p>
              </div>

              <div className="privacy-card privacy-card--purple">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon privacy-card-icon--purple">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="privacy-card-title">Аналитические</h3>
                    <span className="privacy-card-badge privacy-card-badge--purple">
                      Для улучшения работы
                    </span>
                  </div>
                </div>
                <p className="privacy-card-content">
                  Помогают нам понять, как посетители взаимодействуют с сайтом,
                  что позволяет улучшать его работу.
                </p>
              </div>
            </div>
          </section>

          {/* Раздел 3 - Согласие */}
          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Согласие на использование cookie
            </h2>

            <div className="privacy-info-box">
              <h3 className="privacy-info-title">
                Как работает ваше согласие:
              </h3>
              <div className="privacy-steps">
                <div className="privacy-step">
                  <div className="privacy-step-number">1</div>
                  <span>При первом посещении вы видите баннер cookie</span>
                </div>
                <div className="privacy-step">
                  <div className="privacy-step-number">2</div>
                  <span>Вы можете выбрать «Принять» или «Отклонить»</span>
                </div>
                <div className="privacy-step">
                  <div className="privacy-step-number">3</div>
                  <span>Ваше решение сохраняется на 1 месяц</span>
                </div>
                <div className="privacy-step">
                  <div className="privacy-step-number">4</div>
                  <span>Через 1 месяц мы снова спросим ваше согласие</span>
                </div>
              </div>
            </div>
          </section>

          {/* Раздел 4 - Персональные данные */}
          <section className="privacy-section">
            <h2 className="privacy-section-title">Сбор персональных данных</h2>
            <p className="privacy-section-text">
              При использовании сайта мы можем собирать следующую информацию:
            </p>

            <div className="privacy-data-list">
              <div className="privacy-data-item">
                <Eye size={20} />
                <span>ФИО пользователя</span>
              </div>
              <div className="privacy-data-item">
                <Phone size={20} />
                <span>Контактный телефон</span>
              </div>
              <div className="privacy-data-item">
                <Mail size={20} />
                <span>Электронная почта</span>
              </div>
            </div>
          </section>

          {/* Раздел 5 - Управление cookie */}
          <section className="privacy-section">
            <h2 className="privacy-section-title">Управление cookie</h2>

            <div className="privacy-two-columns">
              <div className="privacy-card privacy-card--blue">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon privacy-card-icon--blue">
                    <Settings size={24} />
                  </div>
                  <h3 className="privacy-card-title">В настройках браузера</h3>
                </div>
                <p className="privacy-card-content">
                  Большинство браузеров позволяют блокировать или удалять
                  cookie.
                </p>
              </div>

              <div className="privacy-card privacy-card--blue">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon privacy-card-icon--blue">
                    <Globe size={24} />
                  </div>
                  <h3 className="privacy-card-title">Через наш баннер</h3>
                </div>
                <p className="privacy-card-content">
                  При каждом посещении вы можете изменить своё решение.
                </p>
              </div>
            </div>
          </section>

          {/* Раздел 6 - Контакты */}
          <section className="privacy-section">
            <h2 className="privacy-section-title">Контактная информация</h2>

            <div className="privacy-contacts-grid">
              <div className="privacy-contact-item">
                <div className="privacy-contact-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="privacy-contact-label">Адрес</p>
                  <p className="privacy-contact-value">
                    210020, г. Витебск, ул. П. Бровки, 6А
                  </p>
                </div>
              </div>

              <div className="privacy-contact-item">
                <div className="privacy-contact-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="privacy-contact-label">Телефон</p>
                  <p className="privacy-contact-value">
                    <a href="tel:+375292230322">+375 29 223 03 22</a>
                  </p>
                </div>
              </div>

              <div className="privacy-contact-item">
                <div className="privacy-contact-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="privacy-contact-label">Email</p>
                  <p className="privacy-contact-value">
                    <a href="mailto:info@ambadetail.by">info@ambadetail.by</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="privacy-notice">
              <p>
                По всем вопросам, связанным с обработкой персональных данных или
                использованием файлов cookie, вы можете обратиться по указанным
                контактам.
              </p>
            </div>
          </section>

          {/* Футер страницы */}
          <div className="privacy-page-footer">
            <div className="privacy-footer-info">
              <p className="privacy-footer-date">
                Последнее обновление: {currentDate}
              </p>
              <p className="privacy-footer-copyright">
                © {new Date().getFullYear()} Ambadetail. Все права защищены.
              </p>
            </div>
            <Link href="/" className="privacy-footer-button">
              <Home size={18} />
              <span>На главную</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
