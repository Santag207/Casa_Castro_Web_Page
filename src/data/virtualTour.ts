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
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85",
    hotspots: [
      { id: "e-pool", label: "Ir a la piscina", targetSceneId: "piscina", x: 72, y: 48 },
      { id: "e-sala", label: "Entrar a la sala", targetSceneId: "sala", x: 38, y: 55 },
    ],
  },
  {
    id: "piscina",
    name: "Piscina privada",
    description: "Tu espacio de descanso bajo el sol de Melgar.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85",
    hotspots: [
      { id: "p-bbq", label: "Zona BBQ", targetSceneId: "bbq", x: 18, y: 52 },
      { id: "p-anexo", label: "Anexo / habitaciones", targetSceneId: "habitacion", x: 78, y: 42 },
      { id: "p-entrada", label: "Volver a entrada", targetSceneId: "entrada", x: 50, y: 78 },
    ],
  },
  {
    id: "sala",
    name: "Sala de estar",
    description: "Amplio espacio para reunir a familia y amigos.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85",
    hotspots: [
      { id: "s-cocina", label: "Cocina", targetSceneId: "cocina", x: 82, y: 45 },
      { id: "s-entrada", label: "Salir al exterior", targetSceneId: "entrada", x: 12, y: 58 },
    ],
  },
  {
    id: "cocina",
    name: "Cocina equipada",
    description: "Todo lo necesario para preparar tus comidas.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
    hotspots: [
      { id: "c-sala", label: "Volver a la sala", targetSceneId: "sala", x: 20, y: 50 },
      { id: "c-comedor", label: "Comedor", targetSceneId: "comedor", x: 65, y: 48 },
    ],
  },
  {
    id: "comedor",
    name: "Comedor",
    description: "Mesa amplia para compartir en grupo.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85",
    hotspots: [
      { id: "co-cocina", label: "Cocina", targetSceneId: "cocina", x: 28, y: 52 },
      { id: "co-pool", label: "Terraza / piscina", targetSceneId: "piscina", x: 88, y: 40 },
    ],
  },
  {
    id: "habitacion",
    name: "Habitación principal",
    description: "Confort con aire acondicionado y ropa de cama incluida.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1920&q=85",
    hotspots: [
      { id: "h-pool", label: "Acceso a piscina", targetSceneId: "piscina", x: 75, y: 55 },
      { id: "h-bbq", label: "Zona BBQ", targetSceneId: "bbq", x: 15, y: 48 },
    ],
  },
  {
    id: "bbq",
    name: "Zona BBQ",
    description: "Cenas inolvidables al aire libre.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=85",
    hotspots: [
      { id: "b-pool", label: "Piscina", targetSceneId: "piscina", x: 55, y: 35 },
      { id: "b-entrada", label: "Entrada", targetSceneId: "entrada", x: 22, y: 62 },
    ],
  },
];

export const TOUR_VIDEO_URL =
  "https://assets.mixkit.co/videos/preview/mixkit-swimming-pool-in-a-luxury-resort-4068-large.mp4";

export const TOUR_VIDEO_POSTER =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80";
