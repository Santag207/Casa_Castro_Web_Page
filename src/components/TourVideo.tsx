import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { TOUR_VIDEO_POSTER, TOUR_VIDEO_URL, TOUR_VIDEO_FALLBACK } from "../data/virtualTour";
import { FadeIn } from "./FadeIn";

export function TourVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isYoutube, setIsYoutube] = useState(false);
  const [videoUrl, setVideoUrl] = useState(TOUR_VIDEO_URL);

  useEffect(() => {
    // Detectar si es una URL de YouTube
    if (videoUrl?.includes("youtube.com/embed")) {
      setIsYoutube(true);
    } else {
      // Si es un archivo local, verificar que existe
      // Si no existe, usar YouTube como fallback
      setIsYoutube(false);
    }
  }, [videoUrl]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v || isYoutube) return;
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
    if (!v || isYoutube) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  // Intentar cargar video local, si falla, usar YouTube
  const handleVideoError = () => {
    setVideoUrl(TOUR_VIDEO_FALLBACK);
    setIsYoutube(true);
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
          {isYoutube ? (
            // YouTube embed (sin controles, autoplay, solo reproducción)
            <iframe
              className="video-player__media"
              src={videoUrl}
              title="Video tour Casa Castro"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen={false}
              loading="lazy"
              style={{ pointerEvents: "none" }}
            />
          ) : (
            <>
              {/* Video local */}
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
                onError={handleVideoError}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
              <div className="video-player__overlay" aria-hidden />

              {/* Controles solo para video local */}
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
            </>
          )}
        </motion.div>
      </FadeIn>
    </section>
  );
}
