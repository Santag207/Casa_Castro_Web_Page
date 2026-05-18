import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Habitaciones } from "./pages/Habitaciones";
import { Amenidades } from "./pages/Amenidades";
import { Galeria } from "./pages/Galeria";
import { Contacto } from "./pages/Contacto";
import { Reservar } from "./pages/Reservar";
import { RecorridoVirtual } from "./pages/RecorridoVirtual";
import { Tienda } from "./pages/Tienda";

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="habitaciones" element={<Habitaciones />} />
          <Route path="amenidades" element={<Amenidades />} />
          <Route path="recorrido" element={<RecorridoVirtual />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="tienda" element={<Tienda />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="reservar" element={<Reservar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
