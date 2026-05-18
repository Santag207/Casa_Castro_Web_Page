import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Animación al montar (visible de inmediato al cambiar de página). */
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={fadeUpVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Animación al entrar en el viewport (scroll). */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUpVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}
