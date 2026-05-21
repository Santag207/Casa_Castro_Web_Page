import { Link } from "react-router-dom";
import { ArrowRight, Shield, View } from "lucide-react";
import { motion } from "framer-motion";
import { AMENITIES_HOME, HERO_IMAGE, SITE } from "../data/site";
import { IMAGES } from "../data/images";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/FadeIn";
import { AmenityIcon } from "../components/AmenityIcon";
import { VirtualTour } from "../components/VirtualTour";
import { TourVideo } from "../components/TourVideo";

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Home() {
  return (
    <>
      <section className="hero">
        <motion.div
          className="hero__bg"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero__overlay" />
        <motion.div
          className="container hero__content"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="eyebrow hero__eyebrow" variants={heroItem}>
            Melgar · Tolima · Colombia
          </motion.span>
          <motion.h1 className="hero__title" variants={heroItem}>
            Casa vacacional en Melgar con piscina privada
          </motion.h1>
          <motion.p className="hero__subtitle" variants={heroItem}>
            {SITE.name} — alquiler de casa cerrada en el Tolima para hasta{" "}
            {SITE.maxGuests} personas. Piscina, BBQ, 4 habitaciones con A/A y
            reserva directa por WhatsApp en Melgar.
          </motion.p>
          <motion.div className="hero__actions" variants={heroItem}>
            <Link to="/reservar" className="btn btn--primary">
              Reservar estadía
            </Link>
            <Link to="/recorrido" className="btn btn--outline">
              <View size={18} />
              Recorrido virtual
            </Link>
            <Link to="/habitaciones" className="btn btn--ghost">
              Ver habitaciones
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, y: [0, 8, 0] }}
          transition={{ delay: 1.2, y: { duration: 2, repeat: Infinity } }}
          aria-hidden
        >
          <span />
        </motion.div>
      </section>

      <section className="section section--sand">
        <div className="container split">
          <FadeIn className="split__text">
            <span className="eyebrow">La casa</span>
            <h2 className="section-title">
              Un lugar pensado para reunir a quienes más quieres.
            </h2>
            <p className="section-body">
              Dos secciones independientes, 4 habitaciones con aire acondicionado,
              cocina completa, sala de estar y un espacio exterior con
              piscina, BBQ y parqueadero privado. Todo cerrado y privado para que tu única
              preocupación sea descansar.
            </p>
          </FadeIn>

          <StaggerContainer className="stats">
            <StaggerItem className="stat">
              <span className="stat__number">{SITE.rooms}</span>
              <span className="stat__label">Habitaciones</span>
            </StaggerItem>
            <StaggerItem className="stat">
              <span className="stat__number">{SITE.beds}</span>
              <span className="stat__label">Camas</span>
            </StaggerItem>
            <StaggerItem className="stat">
              <span className="stat__number">{SITE.maxGuests}</span>
              <span className="stat__label">Personas</span>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <FadeIn className="container privacy-banner">
          <Shield size={20} strokeWidth={1.5} />
          <p>
            <strong>Sin vecinos.</strong> Espacio totalmente privado para tu
            grupo o familia.
          </p>
        </FadeIn>
      </section>

      <section className="section section--sea-soft">
        <FadeIn className="container section-header">
          <span className="eyebrow">Recorrido virtual</span>
          <h2 className="section-title">Explora la casa con un clic</h2>
          <p className="section-body section-body--center">
            Muévete entre la piscina, la sala, la cocina y más. Haz clic en los
            puntos luminosos para cambiar de espacio.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <VirtualTour compact showExpandLink />
        </FadeIn>
      </section>

      <section className="section">
        <FadeIn className="container section-header">
          <span className="eyebrow">Amenidades</span>
          <h2 className="section-title">Todo lo que necesitas, incluido.</h2>
        </FadeIn>

        <StaggerContainer className="container amenities-grid amenities-grid--compact">
          {AMENITIES_HOME.map((a) => (
            <StaggerItem key={a.title} className="amenity-card amenity-card--compact">
              <span className="amenity-card__icon">
                <AmenityIcon name={a.icon} />
              </span>
              <span className="amenity-card__title">{a.title}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="container section-cta-link section-cta-link--row">
          <Link to="/amenidades" className="link-arrow">
            Ver todas las amenidades <ArrowRight size={16} />
          </Link>
          <Link to="/tienda" className="link-arrow">
            Tienda de extras <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </section>

      <section className="section section--dark">
        <div className="container feature-rows">
          <FadeIn className="feature-row">
            <div className="feature-row__image-wrap">
              <img
                src={IMAGES.home.poolFeature}
                alt="Piscina privada y zonas verdes"
                className="feature-row__image"
                loading="lazy"
              />
            </div>
            <div className="feature-row__text">
              <span className="eyebrow eyebrow--light">Exterior</span>
              <h3 className="feature-row__title">Piscina privada y zonas verdes</h3>
              <p>
                Disfruta el clima cálido de Melgar con tu propia piscina y áreas
                para descansar bajo las palmeras.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="feature-row feature-row--reverse">
            <div className="feature-row__image-wrap">
              <img
                src={IMAGES.home.bbqFeature}
                alt="Zona BBQ al aire libre"
                className="feature-row__image"
                loading="lazy"
              />
            </div>
            <div className="feature-row__text">
              <span className="eyebrow eyebrow--light">BBQ</span>
              <h3 className="feature-row__title">Cenas al aire libre</h3>
              <p>
                Una zona de BBQ con mesa amplia, perfecta para esas noches
                inolvidables con amigos y familia.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* Ubicación Google Maps */}
      <section className="section section--location">
        <FadeIn className="container section-header">
          <span className="eyebrow">Ubicación</span>
          <h2 className="section-title">¿Dónde está la casa?</h2>
          <p className="section-body section-body--center">
            Casa Castro está ubicada en Melgar, Tolima. Consulta la ubicación exacta en el mapa:
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="container">
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ width: '100%', height: '350px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 16px #0001' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.125827478176!2d-74.69534238077324!3d4.171814663385928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3ed951f5b6116d%3A0xbab3cc95e9522856!2sCONDOMINIO%20COLINAS%20DE%20MARANTA%20MELGAR!5e0!3m2!1ses-419!2sco!4v1779072983707!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Casa Castro en Google Maps"
              ></iframe>
            </div>
            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <a
                href="https://maps.app.goo.gl/uJDg5qDJE2pUbNEB6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <TourVideo />

      <section className="section cta-section">
        <FadeIn className="container cta-box">
          <span className="eyebrow">Reserva directa</span>
          <h2 className="section-title">Asegura tu fecha hoy.</h2>
          <p className="section-body">
            Confirmación inmediata por WhatsApp. Sin intermediarios.
          </p>
          <Link to="/reservar" className="btn btn--primary">
            Reservar ahora
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
