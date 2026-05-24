import { IMAGES } from "./images";

export const SITE = {
  name: "Casa Castro Carrero",
  tagline: "Melgar · Tolima — ¡Si tenemos vecinos!",
  location: "Vía Melgar — Carmen de Apicalá, Tolima, Colombia",
  phone: "+57 314 271 0256",
  phoneRaw: "573142710256",
  email: "reservas@casacastrocarrero.com",
  maxGuests: 17,
  rooms: 4,
  beds: 15,
  baseGuests: 12,
  basePrice: 800000,
  extraPersonPrice: 40000,
  cleaningFee: 70000,
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/habitaciones", label: "Habitaciones" },
  { to: "/amenidades", label: "Amenidades" },
  { to: "/recorrido", label: "Recorrido" },
  { to: "/galeria", label: "Galería" },
  { to: "/tienda", label: "Tienda" },
  { to: "/contacto", label: "Contacto" },
] as const;

export const FOOTER_LINKS = [
  { to: "/habitaciones", label: "Habitaciones" },
  { to: "/amenidades", label: "Amenidades" },
  { to: "/recorrido", label: "Recorrido virtual" },
  { to: "/tienda", label: "Tienda de extras" },
  { to: "/galeria", label: "Galería" },
  { to: "/reservar", label: "Reservar" },
] as const;

export type AmenityCategory = "exterior" | "interior" | "confort";

export const AMENITY_CATEGORIES: { id: AmenityCategory; label: string }[] = [
  { id: "exterior", label: "Exterior & ocio" },
  { id: "interior", label: "Interior" },
  { id: "confort", label: "Confort" },
];

export const AMENITIES_HOME = [
  { icon: "pool", title: "Piscina Privada" },
  { icon: "bbq", title: "Zona BBQ" },
  { icon: "ac", title: "Aire Acondicionado" },
  { icon: "wifi", title: "WiFi" },
  { icon: "parking", title: "Parqueadero privado" },
  { icon: "kitchen", title: "Cocina Equipada" },
] as const;

export const AMENITIES_FULL = [
  {
    icon: "pool",
    title: "Piscina Privada",
    desc: "Refrescante piscina de uso exclusivo para los huéspedes.",
    category: "exterior" as const,
    featured: true,
    image: IMAGES.amenities.piscina,
  },
  {
    icon: "bbq",
    title: "Zona BBQ",
    desc: "Asador que utiliza la mesa del comedor para mayor comodidad.",
    category: "exterior" as const,
    featured: true,
    image: IMAGES.amenities.bbq,
  },
  {
    icon: "private",
    title: "Casa Cerrada",
    desc: "Propiedad totalmente cerrada y privada para tu tranquilidad.",
    category: "exterior" as const,
    featured: true,
    image: IMAGES.amenities.casaCerrada,
  },
  {
    icon: "kitchen",
    title: "Cocina Equipada",
    desc: "Cocina completa con utensilios, nevera y estufa.",
    category: "interior" as const,
    featured: false,
    image: IMAGES.amenities.cocina,
  },
  {
    icon: "living",
    title: "Sala de Estar",
    desc: "Sala cómoda para reunirse con la familia.",
    category: "interior" as const,
    featured: false,
    image: IMAGES.amenities.sala,
  },
  {
    icon: "garden",
    title: "Zonas Verdes",
    desc: "Áreas exteriores con vegetación.",
    category: "exterior" as const,
    featured: false,
    image: IMAGES.amenities.jardin,
  },
  {
    icon: "ac",
    title: "Aire Acondicionado",
    desc: "Todos los cuartos cuentan con aire acondicionado.",
    category: "confort" as const,
    featured: false,
    image: IMAGES.amenities.aireAcondicionado,
  },
  {
    icon: "wifi",
    title: "WiFi",
    desc: "Internet inalámbrico en toda la casa.",
    category: "confort" as const,
    featured: false,
    image: "",
  },
  {
    icon: "parking",
    title: "Parqueadero privado",
    desc: "Estacionamiento privado dentro de la propiedad.",
    category: "exterior" as const,
    featured: false,
    image: "",
  },
  {
    icon: "washer",
    title: "Lavadora",
    desc: "Lavadora disponible para estadías largas.",
    category: "confort" as const,
    featured: false,
    image: "",
  },
  {
    icon: "sun",
    title: "Clima Cálido",
    desc: "Disfruta el sol de Melgar durante todo el año.",
    category: "exterior" as const,
    featured: false,
    image: "",
  },
] as const;

export const ROOMS = [
  {
    id: "seccion-1",
    section: "Sección 1",
    title: "Casa principal",
    description:
      "Una cama doble y cinco camarotes perfectos para grupos grandes o familias numerosas.",
    beds: "1 cama doble y 5 camarotes",
    capacity: "12 pax",
    climate: "A/A",
    image: IMAGES.rooms.seccion1,
    features: [
      "Aire acondicionado",
      "Closet",
      "Vista al jardín",
    ],
  },
  {
    id: "seccion-2",
    section: "Sección 2",
    title: "Anexo privado",
    description:
      "Una cama doble, un camarote y una cama sencilla — ideal para parejas o familias que buscan más independencia.",
    beds: "1 cama doble, un camarote y una cama sencilla",
    capacity: "5 pax",
    climate: "A/A",
    image: IMAGES.rooms.seccion2,
    features: [
      "Aire acondicionado",
      "Acceso directo a piscina",
      "Espacio íntimo",
      "Baño completo",
    ],
  },
] as const;

export const GALLERY = IMAGES.gallery;

export const HERO_IMAGE = IMAGES.home.hero;

export const SECTION_OPTIONS = [
  { value: "casa-completa", label: "Casa completa" },
  { value: "seccion-1", label: "Sección 1" },
  { value: "seccion-2", label: "Sección 2" },
] as const;
