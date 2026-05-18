import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  AMENITIES_FULL,
  AMENITY_CATEGORIES,
  type AmenityCategory,
} from "../data/site";
import { PageHero } from "../components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/FadeIn";
import { AmenityIcon } from "../components/AmenityIcon";

const featured = AMENITIES_FULL.filter((a) => a.featured);

export function Amenidades() {
  const [category, setCategory] = useState<AmenityCategory | "all">("all");

  const filtered =
    category === "all"
      ? AMENITIES_FULL.filter((a) => !a.featured)
      : AMENITIES_FULL.filter((a) => !a.featured && a.category === category);

  return (
    <>
      <PageHero
        label="Experiencia"
        title="Amenidades"
        subtitle="Cada detalle pensado para que solo te preocupes por descansar y disfrutar."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
      />

      <section className="amenities-showcase">
        <motion.div
          className="amenities-showcase__glow"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <div className="container">
          <FadeIn className="amenities-showcase__intro">
            <Sparkles size={20} />
            <h2>Lo más destacado de tu estadía</h2>
            <p>
              Piscina privada, BBQ y total privacidad — el trío que define Casa
              Castro Carrero.
            </p>
          </FadeIn>

          <StaggerContainer className="amenities-featured">
            {featured.map((a, i) => (
              <StaggerItem key={a.title}>
                <motion.article
                  className="amenity-featured"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div
                    className="amenity-featured__bg"
                    style={{ backgroundImage: `url(${a.image})` }}
                  />
                  <div className="amenity-featured__overlay" />
                  <div className="amenity-featured__content">
                    <span className="amenity-featured__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="amenity-featured__icon">
                      <AmenityIcon name={a.icon} size={28} />
                    </span>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <FadeIn className="amenities-filter-header">
            <h2 className="section-title">Todo incluido</h2>
            <p className="section-body">
              Filtra por categoría y descubre cada comodidad de la casa.
            </p>
          </FadeIn>

          <div className="amenities-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={category === "all"}
              className={`amenities-tab${category === "all" ? " amenities-tab--active" : ""}`}
              onClick={() => setCategory("all")}
            >
              Todas
            </button>
            {AMENITY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={category === cat.id}
                className={`amenities-tab${category === cat.id ? " amenities-tab--active" : ""}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              className="amenities-bento"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {filtered.map((a, i) => (
                <motion.article
                  key={a.title}
                  className={`amenity-bento${a.image ? " amenity-bento--visual" : ""}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(11, 37, 69, 0.15)" }}
                >
                  {a.image && (
                    <div
                      className="amenity-bento__img"
                      style={{ backgroundImage: `url(${a.image})` }}
                    />
                  )}
                  <div className="amenity-bento__body">
                    <span className="amenity-bento__icon">
                      <AmenityIcon name={a.icon} size={22} />
                    </span>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <FadeIn className="amenities-cta-banner">
            <div>
              <h3>¿Quieres verlo en persona?</h3>
              <p>Explora la casa con nuestro recorrido virtual interactivo.</p>
            </div>
            <Link to="/recorrido" className="btn btn--primary">
              Recorrido virtual <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
