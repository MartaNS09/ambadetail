"use client";

import { useEffect } from "react";

export default function RegisterServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      // Установка PWA не должна ломать сайт, если браузер отказал в регистрации.
    });
  }, []);

  return null;
}
