import { SITE } from "../data/site";
import type { CartLineWithProduct } from "../context/CartContext";
import { formatCOP } from "../data/shop";
import type { ReservationForm } from "./reservationSchema";

function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("es-CO", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function sectionLabel(value: string): string {
  const map: Record<string, string> = {
    "casa-completa": "Casa completa",
    "seccion-1": "Sección 1 — Casa principal",
    "seccion-2": "Sección 2 — Anexo privado",
  };
  return map[value] ?? value;
}

export function buildCartMessage(lines: CartLineWithProduct[]): string {
  const subtotal = lines.reduce(
    (s, l) => s + l.product.price * l.quantity,
    0
  );

  const items = lines.map(
    (l) =>
      `• ${l.product.name} × ${l.quantity} — ${formatCOP(l.product.price * l.quantity)}`
  );

  return [
    `🛒 *Pedido de extras — ${SITE.name}*`,
    "",
    ...items,
    "",
    `💰 *Subtotal referencia:* ${formatCOP(subtotal)}`,
    "",
    "Confirmar disponibilidad y precio final. ¡Gracias!",
  ].join("\n");
}

export function buildReservationMessage(
  data: ReservationForm,
  cartLines?: CartLineWithProduct[]
): string {
  const lines = [
    `🏡 *Nueva reserva — ${SITE.name}*`,
    "",
    "👤 *Datos del huésped*",
    `• Nombre: ${data.nombre}`,
    `• Teléfono: ${data.telefono}`,
    `• Correo: ${data.email}`,
    "",
    "📅 *Fechas*",
    `• Check-in: ${formatDate(data.checkIn)}`,
    `• Check-out: ${formatDate(data.checkOut)}`,
    `• Noches: ${data.noches}`,
    "",
    "🛏️ *Estadía*",
    `• Sección: ${sectionLabel(data.seccion)}`,
    `• Adultos: ${data.adultos}`,
    `• Niños: ${data.ninos}`,
    `• Total huéspedes: ${data.adultos + data.ninos}`,
  ];

  if (cartLines && cartLines.length > 0) {
    lines.push("", "🛒 *Extras solicitados*");
    for (const l of cartLines) {
      lines.push(
        `• ${l.product.name} × ${l.quantity} — ${formatCOP(l.product.price * l.quantity)}`
      );
    }
    const sub = cartLines.reduce(
      (s, l) => s + l.product.price * l.quantity,
      0
    );
    lines.push(`• Subtotal extras (ref.): ${formatCOP(sub)}`);
  }

  if (data.mensaje?.trim()) {
    lines.push("", "💬 *Mensaje*", data.mensaje.trim());
  }

  lines.push(
    "",
    "—",
    "Enviado desde casacastrocarrero.com",
    "Por favor confirmar disponibilidad y precio. ¡Gracias!"
  );

  return lines.join("\n");
}

export function openWhatsApp(message: string): void {
  const url = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function openWhatsAppInquiry(text?: string): void {
  const defaultText =
    text ??
    "Hola Casa Castro Carrero, me interesa reservar la casa vacacional en Melgar. ¿Tienen disponibilidad?";
  openWhatsApp(defaultText);
}
