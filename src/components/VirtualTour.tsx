import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass,
  Maximize2,
  Minimize2,
  MousePointerClick,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import { TOUR_SCENES } from "../data/virtualTour";

type VirtualTourProps = {
  compact?: boolean;
  showExpandLink?: boolean;
};

export function VirtualTour({
  compact = false,
  showExpandLink = false,
}: VirtualTourProps) {
  const [sceneId, setSceneId] = useState<string>("entrada");
  const [direction, setDirection] = useState(1);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onFs = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const scene =
    TOUR_SCENES.find((s) => s.id === sceneId) ?? TOUR_SCENES[0];

  const goToScene = useCallback(
    (targetId: string) => {
      const currentIdx = TOUR_SCENES.findIndex((s) => s.id === sceneId);
      const nextIdx = TOUR_SCENES.findIndex((s) => s.id === targetId);
      setDirection(nextIdx >= currentIdx ? 1 : -1);
      setSceneId(targetId);
      setParallax({ x: 0, y: 0 });
    },
    [sceneId]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setParallax({ x: x * (compact ? 8 : 14), y: y * (compact ? 5 : 10) });
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
      setFullscreen(true);
    } else {
      await document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`virtual-tour${compact ? " virtual-tour--compact" : ""}${fullscreen ? " virtual-tour--fs" : ""}`}
      layout
    >
      <div
        className="virtual-tour__viewport"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setParallax({ x: 0, y: 0 })}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={scene.id}
            className="virtual-tour__scene"
            custom={direction}
            initial={{ opacity: 0, scale: 1.06, x: direction * 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: direction * -40 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundImage: `url(${scene.image})`,
              transform: `translate(${parallax.x}px, ${parallax.y}px) scale(1.08)`,
            }}
          />
        </AnimatePresence>

        <div className="virtual-tour__vignette" aria-hidden />

        {scene.hotspots.map((spot, i) => (
          <motion.button
            key={spot.id}
            type="button"
            className="virtual-tour__hotspot"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onClick={() => goToScene(spot.targetSceneId)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
            whileHover={{ scale: 1.12 }}
            aria-label={spot.label}
          >
            <span className="virtual-tour__hotspot-pulse" />
            <span className="virtual-tour__hotspot-core" />
            <span className="virtual-tour__hotspot-label">{spot.label}</span>
          </motion.button>
        ))}

        <motion.div
          className="virtual-tour__hud-top"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="virtual-tour__scene-info">
            <Compass size={16} />
            <div>
              <strong>{scene.name}</strong>
              <span>{scene.description}</span>
            </div>
          </div>
          <div className="virtual-tour__hud-actions">
            <button
              type="button"
              onClick={() => goToScene("entrada")}
              aria-label="Reiniciar recorrido"
              title="Reiniciar"
            >
              <RotateCcw size={18} />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={fullscreen ? "Salir pantalla completa" : "Pantalla completa"}
            >
              {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>
        </motion.div>

        <div className="virtual-tour__hud-bottom">
          <p className="virtual-tour__hint">
            <MousePointerClick size={14} />
            Haz clic en los puntos luminosos para moverte por la casa
          </p>
          <div className="virtual-tour__thumbs" role="tablist" aria-label="Espacios">
            {TOUR_SCENES.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={s.id === sceneId}
                className={`virtual-tour__thumb${s.id === sceneId ? " virtual-tour__thumb--active" : ""}`}
                onClick={() => goToScene(s.id)}
                title={s.name}
              >
                <img src={s.image} alt="" />
                <span>{s.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {showExpandLink && compact && (
        <div className="virtual-tour__expand">
          <Link to="/recorrido" className="btn btn--primary">
            Recorrido completo en pantalla
          </Link>
        </div>
      )}
    </motion.div>
  );
}
