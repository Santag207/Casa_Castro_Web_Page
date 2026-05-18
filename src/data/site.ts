export const SITE = {
  name: "Casa Castro Carrero",
  tagline: "Melgar · Tolima",
  location: "Vía Melgar — Carmen de Apicalá, Tolima, Colombia",
  phone: "+57 314 271 0256",
  phoneRaw: "573142710256",
  email: "reservas@casacastrocarrero.com",
  maxGuests: 13,
  rooms: 4,
  beds: 13,
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
  { icon: "parking", title: "Parqueadero" },
  { icon: "kitchen", title: "Cocina Equipada" },
] as const;

export const AMENITIES_FULL = [
  {
    icon: "pool",
    title: "Piscina Privada",
    desc: "Refrescante piscina de uso exclusivo para los huéspedes.",
    category: "exterior" as const,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    icon: "bbq",
    title: "Zona BBQ",
    desc: "Asador con mesa amplia bajo techo para cenas al aire libre.",
    category: "exterior" as const,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  },
  {
    icon: "private",
    title: "Casa Cerrada",
    desc: "Propiedad totalmente cerrada y privada para tu tranquilidad.",
    category: "exterior" as const,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    icon: "kitchen",
    title: "Cocina Equipada",
    desc: "Cocina completa con utensilios, nevera y estufa.",
    category: "interior" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    icon: "living",
    title: "Sala de Estar",
    desc: "Sala cómoda para reunirse con la familia.",
    category: "interior" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    icon: "dining",
    title: "Comedor",
    desc: "Comedor amplio para compartir las comidas.",
    category: "interior" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    icon: "garden",
    title: "Zonas Verdes",
    desc: "Áreas exteriores con vegetación y palmeras.",
    category: "exterior" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  },
  {
    icon: "ac",
    title: "Aire Acondicionado",
    desc: "Todos los cuartos cuentan con aire acondicionado.",
    category: "confort" as const,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
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
    title: "Parqueadero",
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
      "Una cama doble y habitaciones con literas perfectas para grupos grandes o familias numerosas.",
    beds: "1 cama doble + literas",
    capacity: "7 pax",
    climate: "A/A",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
    features: [
      "Aire acondicionado",
      "Closet",
      "Vista al jardín",
      "Ventiladores",
    ],
  },
  {
    id: "seccion-2",
    section: "Sección 2",
    title: "Anexo privado",
    description:
      "Dos camas dobles y un camarote (2 camas) — ideal para parejas o familias que buscan más independencia.",
    beds: "2 camas dobles + 1 camarote",
    capacity: "6 pax",
    climate: "A/A",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    features: [
      "Aire acondicionado",
      "Acceso directo a piscina",
      "Espacio íntimo",
      "Baño completo",
    ],
  },
] as const;

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    alt: "Fachada de la casa vacacional",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Piscina privada con palmeras",
    category: "Piscina",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Sala de estar amplia",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Cocina equipada",
    category: "Cocina",
  },
  {
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    alt: "Habitación principal",
    category: "Habitación",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    alt: "Zona BBQ al aire libre",
    category: "BBQ",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    alt: "Comedor familiar",
    category: "Comedor",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    alt: "Jardín y zonas verdes",
    category: "Jardín",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Vista nocturna de la propiedad",
    category: "Noche",
  },
] as const;

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85";

export const SECTION_OPTIONS = [
  { value: "casa-completa", label: "Casa completa" },
  { value: "seccion-1", label: "Sección 1" },
  { value: "seccion-2", label: "Sección 2" },
] as const;
