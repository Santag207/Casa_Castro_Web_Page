import { z } from "zod";

function nightsBetween(checkIn: string, checkOut: string): number {
  const start = new Date(checkIn + "T12:00:00");
  const end = new Date(checkOut + "T12:00:00");
  const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  return Math.max(0, Math.round(diff));
}

export const reservationSchema = z
  .object({
    nombre: z
      .string()
      .min(3, "Ingresa tu nombre completo (mínimo 3 caracteres)"),
    telefono: z
      .string()
      .min(7, "Ingresa un teléfono válido")
      .regex(/^[\d\s+\-()]+$/, "Solo números y símbolos de teléfono"),
    email: z.string().email("Correo electrónico no válido"),
    checkIn: z.string().min(1, "Selecciona la fecha de check-in"),
    checkOut: z.string().min(1, "Selecciona la fecha de check-out"),
    adultos: z.coerce.number().int().min(1, "Mínimo 1 adulto").max(13),
    ninos: z.coerce.number().int().min(0).max(12),
    seccion: z.enum(["casa-completa", "seccion-1", "seccion-2"]),
    mensaje: z.string().max(500).optional(),
  })
  .refine(
    (data) => {
      if (!data.checkIn || !data.checkOut) return true;
      return data.checkOut > data.checkIn;
    },
    { message: "El check-out debe ser posterior al check-in", path: ["checkOut"] }
  )
  .refine(
    (data) => data.adultos + data.ninos <= 13,
    {
      message: "La capacidad máxima de la casa es 13 personas",
      path: ["adultos"],
    }
  )
  .transform((data) => ({
    ...data,
    noches: nightsBetween(data.checkIn, data.checkOut),
  }));

export type ReservationForm = z.infer<typeof reservationSchema>;

export type ReservationInput = z.input<typeof reservationSchema>;
