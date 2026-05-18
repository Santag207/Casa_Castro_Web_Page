/**
 * @deprecated Usar motion.div con key en Layout.tsx (AnimatePresence requiere motion directo).
 */
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
