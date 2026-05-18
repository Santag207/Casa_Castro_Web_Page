import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY } from "../data/site";
import { PageHero } from "../components/PageHero";
import { StaggerContainer, StaggerItem } from "../components/FadeIn";

export function Galeria() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <PageHero
        label="Recorrido"
        title="Galería"
        subtitle="Una mirada a cada rincón de Casa Castro Carrero."
      />

      <section className="section">
        <StaggerContainer className="container gallery-grid">
          {GALLERY.map((item, i) => (
            <StaggerItem key={item.src} className="gallery-item">
              <button
                type="button"
                className="gallery-item__btn"
                onClick={() => setLightbox(i)}
                aria-label={`Ver ${item.alt}`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery-item__label">{item.category}</span>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada"
          >
            <button
              type="button"
              className="lightbox__close"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
            <motion.img
              key={GALLERY[lightbox].src}
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              className="lightbox__image"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="lightbox__caption">{GALLERY[lightbox].alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
