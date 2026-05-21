import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, ShoppingBag, Sparkles } from "lucide-react";
import {
  SHOP_CATEGORIES,
  SHOP_PRODUCTS,
  formatCOP,
  type ShopCategory,
} from "../data/shop";
import { IMAGES } from "../data/images";
import { PageHero } from "../components/PageHero";
import { FadeIn } from "../components/FadeIn";
import { useCart } from "../context/CartContext";
export function Tienda() {
  const { addItem, items } = useCart();
  const [category, setCategory] = useState<ShopCategory | "all">("all");
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered =
    category === "all"
      ? SHOP_PRODUCTS
      : SHOP_PRODUCTS.filter((p) => p.category === category);

  const handleAdd = (productId: string) => {
    addItem(productId);
    setAddedId(productId);
    window.setTimeout(() => setAddedId(null), 1600);
  };

  const qtyInCart = (id: string) =>
    items.find((i) => i.productId === id)?.quantity ?? 0;

  return (
    <>
      <PageHero
        label="Tienda de extras"
        title="Personaliza tu estadía"
        subtitle="Agrega experiencias, gastronomía y confort a tu reserva. El carrito se integra con tu solicitud por WhatsApp."
        image={IMAGES.pageHero.tienda}
      />

      <section className="section section--sand">
        <div className="container">
          <FadeIn className="shop-intro">
            <Sparkles size={20} />
            <p>
              Precios de referencia en COP. Confirmamos disponibilidad y valor
              final al reservar por WhatsApp.
            </p>
          </FadeIn>

          <div className="shop-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={category === "all"}
              className={`shop-tab${category === "all" ? " shop-tab--active" : ""}`}
              onClick={() => setCategory("all")}
            >
              Todos
            </button>
            {SHOP_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={category === c.id}
                className={`shop-tab${category === c.id ? " shop-tab--active" : ""}`}
                onClick={() => setCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              className="shop-grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {filtered.map((product, i) => {
                const inCart = qtyInCart(product.id);
                const justAdded = addedId === product.id;

                return (
                  <motion.article
                    key={product.id}
                    className="shop-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                  >
                    {product.popular && (
                      <span className="shop-card__badge">Popular</span>
                    )}
                    <div
                      className="shop-card__img"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="shop-card__body">
                      <span className="shop-card__price">
                        {formatCOP(product.price)}
                      </span>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <span className="shop-card__unit">{product.unit}</span>

                      <button
                        type="button"
                        className={`shop-card__btn${justAdded ? " shop-card__btn--done" : ""}`}
                        onClick={() => handleAdd(product.id)}
                      >
                        {justAdded ? (
                          <>
                            <Check size={18} /> Agregado
                          </>
                        ) : (
                          <>
                            <Plus size={18} />
                            {inCart > 0 ? `En carrito (${inCart})` : "Agregar"}
                          </>
                        )}
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <FadeIn className="shop-footer-cta">
            <ShoppingBag size={22} />
            <p>Revisa tu carrito desde el icono del menú superior.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
