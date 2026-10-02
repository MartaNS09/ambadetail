import type { Metadata } from "next";
import Link from "next/link";
import "./page.scss";

export const metadata: Metadata = {
  title: "Нет соединения",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <section className="offline">
      <div className="container offline__inner">
        <p className="offline__brand">AMBADETAIL</p>
        <h1>Нет соединения с интернетом</h1>
        <p>
          Страница откроется, когда сеть появится снова. Записаться можно по
          телефону{" "}
          <a href="tel:+375292230322">+375 29 223 03 22</a>.
        </p>
        <Link href="/" className="offline__home">
          На главную
        </Link>
      </div>
    </section>
  );
}
