import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";
import { VirtualTour } from "../components/VirtualTour";
import { PageHero } from "../components/PageHero";

export function RecorridoVirtual() {
  return (
    <>
      <PageHero
        label="Explora la casa"
        title="Recorrido virtual"
        subtitle="Navega por cada espacio como si estuvieras ahí. Haz clic en los puntos para desplazarte entre zonas."
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85"
      />

      <section className="section section--sand">
        <FadeIn className="container">
          <VirtualTour />
          <p className="virtual-tour-page__note">
            Recorrido interactivo básico. Mueve el cursor para explorar la vista y
            usa los puntos para cambiar de ambiente.{" "}
            <Link to="/reservar">Reserva tu fecha</Link> cuando estés listo.
          </p>
        </FadeIn>
      </section>
    </>
  );
}
