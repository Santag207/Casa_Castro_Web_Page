import { IMAGES } from "./images";

export type TourHotspot = {
  id: string;
  label: string;
  targetSceneId: string;
  x: number;
  y: number;
};

export type TourScene = {
  id: string;
  name: string;
  description: string;
  image: string;
  hotspots: TourHotspot[];
};

export const TOUR_SCENES: TourScene[] = [
  {
    id: "entrada",
    name: "Entrada principal",
    description: "Bienvenido a Casa Castro Carrero. Propiedad cerrada y privada.",
    image: IMAGES.virtualTour.entrada,
    hotspots: [
      { id: "e-pool", label: "Ir a la piscina", targetSceneId: "piscina", x: 72, y: 48 },
      { id: "e-sala", label: "Entrar a la sala", targetSceneId: "sala", x: 38, y: 55 },
    ],
  },
  {
    id: "piscina",
    name: "Piscina privada",
    description: "Tu espacio de descanso bajo el sol de Melgar.",
    image: IMAGES.virtualTour.piscina,
    hotspots: [
      { id: "p-bbq", label: "Zona BBQ", targetSceneId: "bbq", x: 18, y: 52 },
      { id: "p-anexo", label: "Anexo / habitaciones", targetSceneId: "habitacion", x: 78, y: 42 },
      { id: "p-entrada", label: "Volver a entrada", targetSceneId: "entrada", x: 50, y: 78 },
    ],
  },
  {
    id: "sala",
    name: "Sala de estar",
    description: "Espacio para reunir a familia y amigos.",
    image: IMAGES.virtualTour.sala,
    hotspots: [
      { id: "s-cocina", label: "Cocina", targetSceneId: "cocina", x: 82, y: 45 },
      { id: "s-entrada", label: "Salir al exterior", targetSceneId: "entrada", x: 12, y: 58 },
    ],
  },
  {
    id: "cocina",
    name: "Cocina equipada",
    description: "Todo lo necesario para preparar tus comidas.",
    image: IMAGES.virtualTour.cocina,
    hotspots: [
      { id: "c-sala", label: "Volver a la sala", targetSceneId: "sala", x: 20, y: 50 },
      { id: "c-entrada", label: "Regresar a entrada", targetSceneId: "entrada", x: 80, y: 80 },
    ],
  },
  {
    id: "habitacion",
    name: "Habitaciones",
    description: "Confort con aire acondicionado y ropa de cama incluida.",
    image: IMAGES.virtualTour.habitacion,
    hotspots: [
      { id: "h-pool", label: "Acceso a piscina", targetSceneId: "piscina", x: 75, y: 55 },
      { id: "h-bbq", label: "Zona BBQ", targetSceneId: "bbq", x: 15, y: 48 },
      { id: "h-entrada", label: "Regresar a entrada", targetSceneId: "entrada", x: 45, y: 85 },
    ],
  },
  {
    id: "bbq",
    name: "Zona BBQ",
    description: "Asador y área social al aire libre.",
    image: IMAGES.virtualTour.bbq,
    hotspots: [
      { id: "b-pool", label: "Piscina", targetSceneId: "piscina", x: 55, y: 35 },
      { id: "b-entrada", label: "Entrada", targetSceneId: "entrada", x: 22, y: 62 },
      { id: "b-jardin", label: "Ir al jardín", targetSceneId: "jardin", x: 80, y: 50 },
    ],
  },
  {
    id: "jardin",
    name: "Zonas Verdes",
    description: "Espacios naturales para relajarse.",
    image: IMAGES.gallery[6].src,
    hotspots: [
      { id: "j-bbq", label: "Volver a BBQ", targetSceneId: "bbq", x: 20, y: 50 },
      { id: "j-entrada", label: "Regresar a entrada", targetSceneId: "entrada", x: 50, y: 80 },
    ],
  },
];

export const TOUR_VIDEO_URL = IMAGES.video.tourUrl;

export const TOUR_VIDEO_FALLBACK = IMAGES.video.tourUrlFallback;

export const TOUR_VIDEO_POSTER = IMAGES.video.tourPoster;
