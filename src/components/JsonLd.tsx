import { SITE } from "../data/site";
import { SITE_URL } from "../data/seo";

const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: SITE.name,
  description:
    "Casa vacacional privada en Melgar, Tolima, con piscina, zona BBQ y capacidad para hasta 13 huéspedes.",
  url: SITE_URL,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vía Melgar — Carmen de Apicalá",
    addressLocality: "Melgar",
    addressRegion: "Tolima",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.205,
    longitude: -74.639,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Piscina privada", value: true },
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parqueadero", value: true },
    { "@type": "LocationFeatureSpecification", name: "Aire acondicionado", value: true },
  ],
  numberOfRooms: SITE.rooms,
  petsAllowed: "Consultar",
  priceRange: "$$",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
    />
  );
}
