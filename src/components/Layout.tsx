import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { CartDrawer } from "./CartDrawer";
import { JsonLd } from "./JsonLd";
import { usePageSEO } from "../hooks/usePageSEO";
import { getRouteIndex, pageVariants } from "../lib/pageTransitions";

export function Layout() {
  const location = useLocation();
  usePageSEO();

  const prevIndex = useRef(getRouteIndex(location.pathname));
  const [direction, setDirection] = useState(0);

  useLayoutEffect(() => {
    const nextIndex = getRouteIndex(location.pathname);
    setDirection(nextIndex >= prevIndex.current ? 1 : -1);
    prevIndex.current = nextIndex;
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <JsonLd />
      <Header />
      <main className="main-content">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={location.key}
            className="page-shell"
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
    </>
  );
}
