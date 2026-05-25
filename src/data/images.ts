/**
 * IMÁGENES CENTRALIZADAS
 * 
 * Este archivo contiene TODAS las referencias de imágenes del proyecto.
 * Aquí puedes cambiar las URLs a tus propias fotos locales.
 * 
 * Estructura: /public/images/[categoria]/[nombre].jpg
 * Ejemplo: /images/amenities/piscina.jpg
 */

export const IMAGES = {
  // ===== PÁGINA INICIO (HOME) =====
  home: {
    hero: "/images/home/hero.jpg", // Imagen de fondo principal de la página de inicio
    poolFeature: "/images/home/piscina-feature.jpg", // Sección de piscina privada en home
    bbqFeature: "/images/home/bbq-feature.jpg", // Sección de zona BBQ en home
  },

  // ===== PÁGINAS HERO (Encabezados de secciones) =====
  pageHero: {
    amenidades: "/images/hero/amenidades.jpg", // Encabezado de Amenidades
    tienda: "/images/hero/tienda.jpg", // Encabezado de Tienda
    recorridoVirtual: "/images/hero/recorrido-virtual.jpg", // Encabezado de Recorrido Virtual
  },

  // ===== AMENIDADES =====
  amenities: {
    piscina: "/images/amenities/piscina.jpg", // Piscina privada | Para: AMENITIES_FULL
    bbq: "/images/amenities/bbq.jpg", // Zona BBQ | Para: AMENITIES_FULL
    casaCerrada: "/images/amenities/casa-cerrada.jpg", // Casa cerrada/privada | Para: AMENITIES_FULL
    cocina: "/images/amenities/cocina.jpg", // Cocina equipada | Para: AMENITIES_FULL
    sala: "/images/amenities/sala.jpg", // Sala de estar | Para: AMENITIES_FULL
    jardin: "/images/amenities/jardin.jpg", // Zonas verdes/jardín | Para: AMENITIES_FULL
    aireAcondicionado: "/images/amenities/aire-acondicionado.jpg", // Aire acondicionado | Para: AMENITIES_FULL
  },

  // ===== HABITACIONES =====
  rooms: {
    seccion1: "/images/rooms/seccion-1.jpg", // Casa principal (Sección 1) | Para: ROOMS
    seccion2: "/images/rooms/seccion-2.jpg", // Anexo privado (Sección 2) | Para: ROOMS
  },

  // ===== GALERÍA =====
  gallery: [
    {
      src: "/images/gallery/1-fachada.jpg", // Fachada de la casa
      alt: "Fachada de la casa vacacional",
      category: "Exterior",
    },
    {
      src: "/images/gallery/2-piscina.jpg", // Piscina privada
      alt: "Piscina privada",
      category: "Piscina",
    },
    {
      src: "/images/gallery/3-sala.jpg", // Sala de estar
      alt: "Sala de estar confortable",
      category: "Interior",
    },
    {
      src: "/images/gallery/4-cocina.jpg", // Cocina
      alt: "Cocina equipada",
      category: "Cocina",
    },
    {
      src: "/images/gallery/5-habitacion.jpg", // Habitación
      alt: "Habitación principal",
      category: "Habitación",
    },
    {
      src: "/images/gallery/6-bbq.jpg", // BBQ
      alt: "Zona BBQ al aire libre",
      category: "BBQ",
    },
    {
      src: "/images/gallery/7-jardin.jpg", // Jardín
      alt: "Jardín y zonas verdes",
      category: "Jardín",
    },
    {
      src: "/images/gallery/8-noche.jpg", // Vista nocturna
      alt: "Vista nocturna de la propiedad",
      category: "Noche",
    },
  ],

  // ===== TIENDA (SHOP) =====
  shop: {
    kitBbq: "/images/shop/kit-bbq.jpg", // Kit BBQ premium | Para: SHOP_PRODUCTS
    checkoutTardio: "/images/shop/checkout-tardio.jpg", // Check-out tardío | Para: SHOP_PRODUCTS
    decoracion: "/images/shop/decoracion.jpg", // Decoración celebración | Para: SHOP_PRODUCTS
    limpiezaExtra: "/images/shop/limpieza-extra.jpg", // Limpieza intermedia | Para: SHOP_PRODUCTS
  },

  // ===== RECORRIDO VIRTUAL (TOUR SCENES) =====
  virtualTour: {
    entrada: "/images/tour/entrada.jpg", // Entrada principal | Para: TOUR_SCENES
    piscina: "/images/tour/piscina.jpg", // Piscina privada | Para: TOUR_SCENES
    sala: "/images/tour/sala.jpg", // Sala de estar | Para: TOUR_SCENES
    cocina: "/images/tour/cocina.jpg", // Cocina | Para: TOUR_SCENES
    habitacion: "/images/tour/habitacion.jpg", // Habitación principal | Para: TOUR_SCENES
    bbq: "/images/tour/bbq.jpg", // Zona BBQ | Para: TOUR_SCENES
  },

  // ===== VIDEO RECORRIDO =====
  video: {
    // Usa una ruta local si tienes video propio: "/images/video/tour.mp4"
    // Si no existe el archivo local, usará automáticamente el video de YouTube
    tourUrl: "/images/video/tour.mp4",
    tourUrlFallback: "https://www.youtube.com/embed/lP8zVVk3AwQ?autoplay=1&controls=0&modestbranding=1&fs=0&loop=1", // YouTube embed como fallback
    tourPoster: "/images/video/tour-poster.jpg", // Imagen de portada del video
  },
} as const;
