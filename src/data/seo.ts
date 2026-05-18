import { SITE } from "./site";

export type SEOConfig = {
  title: string;
  description: string;
  keywords: string;
  path: string;
};

const BASE_KEYWORDS =
  "casa vacacional Melgar, alquiler Melgar Tolima, finca con piscina Melgar, casa privada Tolima, alojamiento Carmen de Apicalá";

export const SEO_ROUTES: Record<string, SEOConfig> = {
  "/": {
    title: `Casa vacacional en Melgar con piscina privada | ${SITE.name}`,
    description:
      "Alquila Casa Castro Carrero en Melgar, Tolima: casa vacacional cerrada con piscina, BBQ y capacidad para 13 personas. Reserva directa por WhatsApp sin intermediarios.",
    keywords: `${BASE_KEYWORDS}, casa con piscina privada, vacaciones en familia Melgar`,
    path: "/",
  },
  "/habitaciones": {
    title: `Habitaciones y capacidad — 4 cuartos, 13 camas | ${SITE.name}`,
    description:
      "Conoce las 4 habitaciones con aire acondicionado: casa principal y anexo privado. Ideal para grupos y familias en Melgar, Tolima.",
    keywords: `${BASE_KEYWORDS}, habitaciones Melgar, casa para grupos`,
    path: "/habitaciones",
  },
  "/amenidades": {
    title: `Amenidades: piscina, BBQ, WiFi y más | ${SITE.name}`,
    description:
      "Piscina privada, zona BBQ, cocina equipada, parqueadero y propiedad totalmente cerrada. Todo incluido en tu estadía en Melgar.",
    keywords: `${BASE_KEYWORDS}, piscina privada Melgar, BBQ finca`,
    path: "/amenidades",
  },
  "/recorrido": {
    title: `Recorrido virtual 360° de la casa | ${SITE.name}`,
    description:
      "Explora Casa Castro Carrero en un recorrido virtual interactivo: piscina, sala, cocina, habitaciones y zona BBQ en Melgar.",
    keywords: `${BASE_KEYWORDS}, tour virtual casa vacacional`,
    path: "/recorrido",
  },
  "/galeria": {
    title: `Galería de fotos — Casa vacacional Melgar | ${SITE.name}`,
    description:
      "Fotos de la piscina, interiores, cocina, jardín y zonas sociales de nuestra casa vacacional privada en el Tolima.",
    keywords: `${BASE_KEYWORDS}, fotos finca Melgar`,
    path: "/galeria",
  },
  "/tienda": {
    title: `Extras y experiencias para tu estadía | ${SITE.name}`,
    description:
      "Agrega kits BBQ, bienvenida, check-out tardío y más a tu reserva. Carrito integrado y confirmación por WhatsApp.",
    keywords: `${BASE_KEYWORDS}, extras alojamiento Melgar`,
    path: "/tienda",
  },
  "/contacto": {
    title: `Contacto y WhatsApp — Reservas ${SITE.name}`,
    description:
      "Escríbenos por WhatsApp o teléfono. Ubicación: Vía Melgar — Carmen de Apicalá, Tolima. Respuesta en minutos.",
    keywords: `${BASE_KEYWORDS}, contacto casa vacacional Melgar`,
    path: "/contacto",
  },
  "/reservar": {
    title: `Reservar estadía en Melgar — Formulario directo | ${SITE.name}`,
    description:
      "Reserva tu fecha en Casa Castro Carrero. Envía tu solicitud por WhatsApp con fechas, huéspedes y extras. Confirmación rápida.",
    keywords: `${BASE_KEYWORDS}, reservar casa Melgar, booking Tolima`,
    path: "/reservar",
  },
};

export const DEFAULT_SEO = SEO_ROUTES["/"];

export const SITE_URL = "https://casacastrocarrero.com";

export function getSEO(pathname: string): SEOConfig {
  return SEO_ROUTES[pathname] ?? DEFAULT_SEO;
}
