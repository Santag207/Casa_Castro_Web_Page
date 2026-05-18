import {
  AirVent,
  Car,
  ChefHat,
  Flame,
  Home,
  Leaf,
  Sofa,
  Sun,
  UtensilsCrossed,
  Waves,
  Wifi,
  WashingMachine,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  pool: Waves,
  bbq: Flame,
  ac: AirVent,
  wifi: Wifi,
  parking: Car,
  kitchen: ChefHat,
  washer: WashingMachine,
  private: Home,
  living: Sofa,
  dining: UtensilsCrossed,
  garden: Leaf,
  sun: Sun,
};

export function AmenityIcon({ name, size = 22 }: { name: string; size?: number }) {
  const Icon = ICONS[name] ?? Home;
  return <Icon size={size} strokeWidth={1.5} aria-hidden />;
}
