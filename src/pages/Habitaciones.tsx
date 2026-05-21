import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { ROOMS } from "../data/site";
import { PageHero } from "../components/PageHero";
import { FadeIn } from "../components/FadeIn";

export function Habitaciones() {
  return (
    <>
      <PageHero
        label="Alojamiento"
        title="Habitaciones"
        subtitle="4 habitaciones distribuidas en dos secciones independientes — 15 camas en total, todas con aire acondicionado, ropa de cama y toallas incluidas."
      />

      <section className="section">
        <div className="container rooms-list">
          {ROOMS.map((room, index) => (
            <FadeIn
              key={room.id}
              className={`room-card${index % 2 === 1 ? " room-card--reverse" : ""}`}
            >
              <div className="room-card__image-wrap">
                <img
                  src={room.image}
                  alt={room.title}
                  className="room-card__image"
                  loading="lazy"
                />
              </div>
              <div className="room-card__body">
                <span className="eyebrow">{room.section}</span>
                <h2 className="room-card__title">{room.title}</h2>
                <p className="room-card__desc">{room.description}</p>

                <div className="room-card__meta">
                  <div>
                    <span className="room-card__meta-label">Camas</span>
                    <span>{room.beds}</span>
                  </div>
                  <div>
                    <span className="room-card__meta-label">Capacidad</span>
                    <span>{room.capacity}</span>
                  </div>
                  <div>
                    <span className="room-card__meta-label">Clima</span>
                    <span>{room.climate}</span>
                  </div>
                </div>

                <ul className="room-card__features">
                  {room.features.map((f) => (
                    <li key={f}>
                      <Check size={16} strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/reservar" className="btn btn--primary">
                  Reservar
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
