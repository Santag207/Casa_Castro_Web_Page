import type { Transition, Variants } from "framer-motion";

/** Orden del menú: define dirección sutil de la transición. */
export const ROUTE_ORDER = [
  "/",
  "/habitaciones",
  "/amenidades",
  "/recorrido",
  "/galeria",
  "/tienda",
  "/contacto",
  "/reservar",
] as const;

export function getRouteIndex(path: string): number {
  const idx = ROUTE_ORDER.indexOf(path as (typeof ROUTE_ORDER)[number]);
  return idx === -1 ? 0 : idx;
}

export const pageTransition: Transition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
};

export const pageVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? 18 : -12,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: pageTransition,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction >= 0 ? -10 : 14,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};
