import { motion } from "framer-motion";

type PageHeroProps = {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({ label, title, subtitle, image }: PageHeroProps) {
  return (
    <section
      className={`page-hero${image ? " page-hero--image" : ""}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        <motion.span
          className={`eyebrow${image ? " eyebrow--light" : ""}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.span>
        <motion.h1
          className="page-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="page-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
