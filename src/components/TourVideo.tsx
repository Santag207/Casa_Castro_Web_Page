import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { TOUR_VIDEO_POSTER, TOUR_VIDEO_URL } from "../data/virtualTour";
import { FadeIn } from "./FadeIn";

export function TourVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="section section--sea video-section">
      <FadeIn className="container">
        <div className="video-section__header">
          <span className="eyebrow eyebrow--light">Video tour</span>
          <h2 className="section-title section-title--light">
            Un vistazo rápido a tu próxima escapada
          </h2>
          <p className="section-body section-body--light">
            Recorrido corto por los espacios exteriores y la zona de piscina de la
            casa — como si ya estuvieras de vacaciones.
          </p>
        </div>

        <motion.div
          className="video-player"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            ref={videoRef}
            className="video-player__media"
            poster={TOUR_VIDEO_POSTER}
            playsInline
            muted={muted}
            loop
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={TOUR_VIDEO_URL} type="video/mp4" />
          </video>
          <div className="video-player__overlay" aria-hidden />

          <div className="video-player__controls">
            <button
              type="button"
              className="video-player__btn video-player__btn--main"
              onClick={togglePlay}
              aria-label={playing ? "Pausar" : "Reproducir"}
            >
              {playing ? <Pause size={22} /> : <Play size={22} fill="currentColor" />}
            </button>
            <button
              type="button"
              className="video-player__btn"
              onClick={toggleMute}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  );
}
