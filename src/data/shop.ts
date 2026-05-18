export type ShopCategory = "experiencias" | "confort" | "gastronomia";

export type ShopProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: ShopCategory;
  image: string;
  popular?: boolean;
};

export const SHOP_CATEGORIES: { id: ShopCategory; label: string }[] = [
  { id: "experiencias", label: "Experiencias" },
  { id: "gastronomia", label: "Gastronomía" },
  { id: "confort", label: "Confort" },
];

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "kit-bbq",
    name: "Kit BBQ premium",
    description:
      "Carbón, encendedor, utensilios y especias para una parrillada sin preocupaciones.",
    price: 85000,
    unit: "por estadía",
    category: "gastronomia",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    popular: true,
  },
  {
    id: "bienvenida",
    name: "Canasta de bienvenida",
    description:
      "Frutas de temporada, bebidas frías y snacks locales al llegar a la casa.",
    price: 65000,
    unit: "unidad",
    category: "gastronomia",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
    popular: true,
  },
  {
    id: "checkout-tardio",
    name: "Check-out tardío",
    description: "Disfruta la piscina hasta las 4:00 p.m. el día de salida.",
    price: 50000,
    unit: "servicio",
    category: "experiencias",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    id: "decoracion",
    name: "Decoración celebración",
    description:
      "Globos, banner personalizado y mesa lista para cumpleaños o aniversario.",
    price: 120000,
    unit: "evento",
    category: "experiencias",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  },
  {
    id: "toallas-extra",
    name: "Set toallas extra",
    description: "Paquete adicional de toallas para grupo grande o estadía larga.",
    price: 35000,
    unit: "set",
    category: "confort",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=80",
  },
  {
    id: "limpieza-extra",
    name: "Limpieza intermedia",
    description: "Servicio de aseo a mitad de estadía en estadías de 4+ noches.",
    price: 90000,
    unit: "servicio",
    category: "confort",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  },
  {
    id: "flotadores",
    name: "Kit piscina inflable",
    description: "Flotadores y juegos acuáticos para niños y adultos.",
    price: 45000,
    unit: "por estadía",
    category: "experiencias",
    image:
      "https://images.unsplash.com/photo-1576610616656-d1f3fcf6339f?w=600&q=80",
  },
  {
    id: "desayuno",
    name: "Desayuno campestre",
    description:
      "Huevos, arepas, fruta, café y jugo natural servidos en la terraza (mín. 6 pax).",
    price: 25000,
    unit: "por persona",
    category: "gastronomia",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
  },
];

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProduct(id: string): ShopProduct | undefined {
  return SHOP_PRODUCTS.find((p) => p.id === id);
}
