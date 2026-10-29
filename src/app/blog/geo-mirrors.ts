/** Geo-mirror blogs that duplicate /uslugi/* — canonical points to the service page */
export const SERVICE_CANONICAL_BY_BLOG_SLUG: Record<string, string> = {
  "okleyka-avto-plenkoy-vitebsk": "/uslugi/okleyka-auto-plenkoy",
  "antigraviynaya-plenka-vitebsk": "/uslugi/okleyka-auto-plenkoy",
  "tonirovka-avto-vitebsk": "/uslugi/tonirovka",
  "razreshennaya-tonirovka-vitebsk": "/uslugi/tonirovka",
  "polirovka-kuzova-vitebsk": "/uslugi/polirovka",
  "khimchistka-salona-vitebsk": "/uslugi/khimchistka-salona",
  "zashhitnye-pokrytiya-vitebsk": "/uslugi/zashhitnye-pokrytiya",
  "vosstanovlenie-lkp-vitebsk": "/uslugi/vosstanovlenie-lkp",
  "detailing-dvigatelya-vitebsk": "/uslugi/detailing-dvigatelya",
};

export const GEO_MIRROR_BLOG_SLUGS = Object.keys(SERVICE_CANONICAL_BY_BLOG_SLUG);
