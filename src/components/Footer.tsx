import { Link } from "react-router-dom";
import { FOOTER_LINKS, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h3 className="footer__title">{SITE.name}</h3>
          <p className="footer__desc">
            Una casa vacacional privada para vivir Melgar como en casa: piscina,
            BBQ, espacios confortables y total tranquilidad.
          </p>
        </div>

        <div>
          <h4 className="footer__heading">Explorar</h4>
          <ul className="footer__links">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer__heading">Contacto</h4>
          <ul className="footer__contact">
            <li>{SITE.location}</li>
            <li>
              <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
        <p className="footer__note">Diseñado con cariño para tus vacaciones.</p>
      </div>
    </footer>
  );
}
