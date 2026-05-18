import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "../data/site";
import { PageHero } from "../components/PageHero";
import { FadeIn } from "../components/FadeIn";
import { openWhatsAppInquiry } from "../lib/whatsapp";

export function Contacto() {
  return (
    <>
      <PageHero label="Hablemos" title="Contacto" />

      <section className="section">
        <div className="container contact-grid">
          <FadeIn className="contact-main">
            <h2 className="section-title">¿Listos para reservar?</h2>
            <p className="section-body">
              La forma más rápida de coordinar tu estadía es por WhatsApp.
              Respondemos en minutos.
            </p>

            <div className="contact-cards">
              <button
                type="button"
                className="contact-card contact-card--whatsapp"
                onClick={() => openWhatsAppInquiry()}
              >
                <MessageCircle size={22} />
                <div>
                  <span className="contact-card__label">WhatsApp</span>
                  <span>{SITE.phone}</span>
                </div>
              </button>

              <a href={`tel:${SITE.phoneRaw}`} className="contact-card">
                <Phone size={22} />
                <div>
                  <span className="contact-card__label">Teléfono</span>
                  <span>{SITE.phone}</span>
                </div>
              </a>

              <a href={`mailto:${SITE.email}`} className="contact-card">
                <Mail size={22} />
                <div>
                  <span className="contact-card__label">Correo</span>
                  <span>{SITE.email}</span>
                </div>
              </a>
            </div>

            <div className="contact-location">
              <MapPin size={20} />
              <div>
                <span className="contact-card__label">Ubicación</span>
                <span>{SITE.location}</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="contact-side" delay={0.15}>
            <h3>Reserva por WhatsApp</h3>
            <p>
              Usa nuestro formulario de reserva y enviaremos todos los datos
              directamente a nuestro WhatsApp. Confirmamos disponibilidad y
              precio al instante.
            </p>
            <Link to="/reservar" className="btn btn--primary">
              Ir al formulario
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
