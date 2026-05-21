import { IMAGES } from "./images";

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
    image: IMAGES.shop.kitBbq,
    popular: true,
  },
  {
    id: "checkout-tardio",
    name: "Check-out tardío",
    description: "Disfruta la piscina hasta las 6:00 p.m. el día de salida.",
    price: 50000,
    unit: "servicio",
    category: "experiencias",
    image: IMAGES.shop.checkoutTardio,
  },
  {
    id: "decoracion",
    name: "Decoración celebración",
    description:
      "Globos, banner personalizado y mesa lista para cumpleaños o aniversario.",
    price: 120000,
    unit: "evento",
    category: "experiencias",
    image: IMAGES.shop.decoracion,
  },
  {
    id: "limpieza-extra",
    name: "Limpieza intermedia",
    description: "Servicio de aseo a mitad de estadía en estadías de 4+ noches.",
    price: 90000,
    unit: "servicio",
    category: "confort",
    image: IMAGES.shop.limpiezaExtra,
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
