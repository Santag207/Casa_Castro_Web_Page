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
  const payingGuests = Number(data.adultos) + Number(data.ninos);
  const totalGuests = payingGuests + Number(data.ninosBajo8);

  const extraGuestsCount = Math.max(0, payingGuests - SITE.baseGuests);
  const baseTotal = data.noches * SITE.basePrice;
  const extraTotal = extraGuestsCount * SITE.extraPersonPrice * data.noches;

  // Cleaning fee logic: 70k for group of 12, 90k for group of more than 13.
  // 13 guests will pay 70k as it is not "more than 13".
  const cleaningFee = totalGuests > 13 ? 90000 : 70000;
  const depositValue = 200000;

  const reservationSubtotal = baseTotal + extraTotal + cleaningFee;

  const lines = [
    `🏡 *Nueva reserva — ${SITE.name}*`,
    "👤 *Datos del huésped*",
    `* Nombre: ${data.nombre}`,
    `* Teléfono: ${data.telefono}`,
    `* Correo: ${data.email}`,
    "📅 *Fechas*",
    `* Check-in: ${formatDate(data.checkIn)}`,
    `* Check-out: ${formatDate(data.checkOut)}`,
    `* Noches: ${data.noches}`,
    "🛏️ *Estadía*",
    `* Sección: ${sectionLabel(data.seccion)}`,
    `* Adultos: ${data.adultos}`,
    `* Niños: ${data.ninos}`,
    data.ninosBajo8 > 0 ? `* Niños < 8 años: ${data.ninosBajo8}` : null,
    `* Total huéspedes: ${totalGuests}`,
    "💰 *Desglose estimado*",
    `* Estadía (${data.noches} n.): ${formatCOP(baseTotal)}`,
    extraGuestsCount > 0 ? `* Extra (${extraGuestsCount} pax): ${formatCOP(extraTotal)}` : null,
    `* Aseo (obligatorio): ${formatCOP(cleaningFee)}`,
    `* Subtotal estadía: ${formatCOP(reservationSubtotal)}`,
  ].filter(Boolean) as string[];

  let grandTotal = reservationSubtotal;

  if (cartLines && cartLines.length > 0) {
    lines.push("", "🛒 *Extras solicitados*");
    for (const l of cartLines) {
      lines.push(
        `* ${l.product.name} × ${l.quantity} — ${formatCOP(l.product.price * l.quantity)}`
      );
    }
    const sub = cartLines.reduce(
      (s, l) => s + l.product.price * l.quantity,
      0
    );
    grandTotal += sub;
    lines.push(`* Subtotal extras: ${formatCOP(sub)}`);
  }

  lines.push("", `💵 *TOTAL ESTIMADO: ${formatCOP(grandTotal)}*`);

  const footerMessage = [
    "💬 *Mensaje*",
    data.mensaje?.trim() ? data.mensaje.trim() : "",
    "Si son ninos menores de 8 años no pagan estadía , falta colocar depósito son 200.000 fijos que se devuelven 2 días después de la salida si tod está en orden , el aseo son 70.000 grupo de 12 personas y 90.000 grupo de más de 13 personas, el aseo es general no incluye lavado de loza ni ollas,",
  ].filter(Boolean).join("\n");

  lines.push("", footerMessage);

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
