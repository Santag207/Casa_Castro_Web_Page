import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { FadeIn } from "../components/FadeIn";
import { useCart } from "../context/CartContext";
import { SITE, SECTION_OPTIONS } from "../data/site";
import {
  reservationSchema,
  type ReservationInput,
} from "../lib/reservationSchema";
import { buildReservationMessage, openWhatsApp } from "../lib/whatsapp";

const defaultValues: ReservationInput = {
  nombre: "",
  telefono: "",
  email: "",
  checkIn: "",
  checkOut: "",
  adultos: 2,
  ninos: 0,
  seccion: "casa-completa",
  mensaje: "",
};

function nightsBetween(checkIn: string, checkOut: string): number | null {
  if (!checkIn || !checkOut || checkOut <= checkIn) return null;
  const start = new Date(checkIn + "T12:00:00");
  const end = new Date(checkOut + "T12:00:00");
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

function formatSummaryDate(iso: string): string {
  if (!iso) return "—";
  return new Date(iso + "T12:00:00").toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function Reservar() {
  const { lines, formatCOP } = useCart();
  const [form, setForm] = useState<ReservationInput>(defaultValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const nights = useMemo(
    () => nightsBetween(form.checkIn, form.checkOut),
    [form.checkIn, form.checkOut]
  );

  const sectionLabel =
    SECTION_OPTIONS.find((s) => s.value === form.seccion)?.label ?? "—";

  const update = <K extends keyof ReservationInput>(
    key: K,
    value: ReservationInput[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key as string];
      return next;
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const result = reservationSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setSubmitting(false);
      return;
    }

    openWhatsApp(
      buildReservationMessage(result.data, lines.length > 0 ? lines : undefined)
    );
    setSubmitting(false);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <PageHero
        label="Reserva directa"
        title="Reservar estadía"
        subtitle="Completa el formulario y enviaremos tu solicitud por WhatsApp. Confirmamos disponibilidad y precio en pocos minutos."
      />

      <section className="section">
        <div className="container reserve-grid">
          <FadeIn className="reserve-form-wrap">
            <form className="reserve-form" onSubmit={handleSubmit} noValidate>
              <fieldset>
                <legend>Tus datos</legend>
                <div className="form-row">
                  <label htmlFor="nombre">
                    Nombre completo
                    <input
                      id="nombre"
                      type="text"
                      autoComplete="name"
                      value={form.nombre}
                      onChange={(e) => update("nombre", e.target.value)}
                      className={errors.nombre ? "input--error" : ""}
                    />
                    {errors.nombre && (
                      <span className="field-error">{errors.nombre}</span>
                    )}
                  </label>
                  <label htmlFor="telefono">
                    Teléfono
                    <input
                      id="telefono"
                      type="tel"
                      autoComplete="tel"
                      value={form.telefono}
                      onChange={(e) => update("telefono", e.target.value)}
                      className={errors.telefono ? "input--error" : ""}
                    />
                    {errors.telefono && (
                      <span className="field-error">{errors.telefono}</span>
                    )}
                  </label>
                </div>

                <label htmlFor="email">
                  Correo electrónico
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={errors.email ? "input--error" : ""}
                  />
                  {errors.email && (
                    <span className="field-error">{errors.email}</span>
                  )}
                </label>
              </fieldset>

              <fieldset>
                <legend>Fechas</legend>
                <div className="form-row">
                  <label htmlFor="checkIn">
                    Check-in
                    <input
                      id="checkIn"
                      type="date"
                      min={today}
                      value={form.checkIn}
                      onChange={(e) => update("checkIn", e.target.value)}
                      className={errors.checkIn ? "input--error" : ""}
                    />
                    {errors.checkIn && (
                      <span className="field-error">{errors.checkIn}</span>
                    )}
                  </label>
                  <label htmlFor="checkOut">
                    Check-out
                    <input
                      id="checkOut"
                      type="date"
                      min={form.checkIn || today}
                      value={form.checkOut}
                      onChange={(e) => update("checkOut", e.target.value)}
                      className={errors.checkOut ? "input--error" : ""}
                    />
                    {errors.checkOut && (
                      <span className="field-error">{errors.checkOut}</span>
                    )}
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Huéspedes</legend>
                <div className="form-row form-row--3">
                  <label htmlFor="adultos">
                    Adultos
                    <input
                      id="adultos"
                      type="number"
                      min={1}
                      max={13}
                      value={form.adultos}
                      onChange={(e) => update("adultos", e.target.value)}
                      className={errors.adultos ? "input--error" : ""}
                    />
                    {errors.adultos && (
                      <span className="field-error">{errors.adultos}</span>
                    )}
                  </label>
                  <label htmlFor="ninos">
                    Niños
                    <input
                      id="ninos"
                      type="number"
                      min={0}
                      max={12}
                      value={form.ninos}
                      onChange={(e) => update("ninos", e.target.value)}
                      className={errors.ninos ? "input--error" : ""}
                    />
                  </label>
                  <label htmlFor="seccion">
                    Sección
                    <select
                      id="seccion"
                      value={form.seccion}
                      onChange={(e) =>
                        update(
                          "seccion",
                          e.target.value as ReservationInput["seccion"]
                        )
                      }
                    >
                      {SECTION_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Mensaje (opcional)</legend>
                <label htmlFor="mensaje">
                  Cuéntanos cualquier detalle especial
                  <textarea
                    id="mensaje"
                    rows={4}
                    maxLength={500}
                    value={form.mensaje ?? ""}
                    onChange={(e) => update("mensaje", e.target.value)}
                  />
                </label>
              </fieldset>

              <button
                type="submit"
                className="btn btn--whatsapp btn--full"
                disabled={submitting}
              >
                <MessageCircle size={20} />
                {submitting ? "Preparando..." : "Enviar reserva por WhatsApp"}
              </button>

              <p className="reserve-form__note">
                Al enviar se abrirá WhatsApp con todos los datos prellenados. La
                reserva se confirma una vez recibamos tu mensaje.
              </p>
            </form>
          </FadeIn>

          <FadeIn className="reserve-summary" delay={0.15}>
            <h3>Resumen</h3>
            <div className="reserve-summary__card">
              <p className="reserve-summary__property">{SITE.name}</p>
              <p className="reserve-summary__location">{SITE.location}</p>

              <dl className="reserve-summary__list">
                <div>
                  <dt>Check-in</dt>
                  <dd>{formatSummaryDate(form.checkIn)}</dd>
                </div>
                <div>
                  <dt>Check-out</dt>
                  <dd>{formatSummaryDate(form.checkOut)}</dd>
                </div>
                <div>
                  <dt>Noches</dt>
                  <dd>{nights ?? "—"}</dd>
                </div>
                <div>
                  <dt>Huéspedes</dt>
                  <dd>
                    {form.adultos} adultos · {form.ninos} niños
                  </dd>
                </div>
                <div>
                  <dt>Sección</dt>
                  <dd>{sectionLabel}</dd>
                </div>
              </dl>

              {lines.length > 0 && (
                <div className="reserve-summary__extras">
                  <h4>
                    <ShoppingBag size={16} /> Extras en carrito
                  </h4>
                  <ul>
                    {lines.map((l) => (
                      <li key={l.productId}>
                        <span>
                          {l.product.name} × {l.quantity}
                        </span>
                        <span>{formatCOP(l.product.price * l.quantity)}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/tienda" className="link-arrow">
                    Editar en tienda
                  </Link>
                </div>
              )}
            </div>

            <div className="reserve-summary__call">
              <h4>¿Prefieres llamarnos?</h4>
              <p>Estamos disponibles todos los días.</p>
              <a href={`tel:${SITE.phoneRaw}`} className="link-phone">
                <Phone size={18} />
                {SITE.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
