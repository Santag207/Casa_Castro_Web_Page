import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { buildCartMessage, openWhatsApp } from "../lib/whatsapp";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    lines,
    itemCount,
    subtotal,
    formatCOP,
    setQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const handleWhatsApp = () => {
    if (lines.length === 0) return;
    openWhatsApp(buildCartMessage(lines));
    closeCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            className="cart-overlay"
            aria-label="Cerrar carrito"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
          />
          <motion.aside
            className="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Carrito de extras"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="cart-drawer__head">
              <div>
                <ShoppingBag size={20} />
                <h2>Tu carrito</h2>
                <span>{itemCount} artículo{itemCount !== 1 ? "s" : ""}</span>
              </div>
              <button type="button" onClick={closeCart} aria-label="Cerrar">
                ×
              </button>
            </header>

            <div className="cart-drawer__body">
              {lines.length === 0 ? (
                <div className="cart-drawer__empty">
                  <ShoppingBag size={40} strokeWidth={1} />
                  <p>Aún no has agregado extras.</p>
                  <Link to="/tienda" className="btn btn--primary" onClick={closeCart}>
                    Ver tienda
                  </Link>
                </div>
              ) : (
                <ul className="cart-drawer__list">
                  {lines.map((line) => (
                    <motion.li
                      key={line.productId}
                      className="cart-line"
                      layout
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                    >
                      <img src={line.product.image} alt="" />
                      <div className="cart-line__info">
                        <strong>{line.product.name}</strong>
                        <span>{formatCOP(line.product.price)} / {line.product.unit}</span>
                        <div className="cart-line__qty">
                          <button
                            type="button"
                            aria-label="Menos"
                            onClick={() =>
                              setQuantity(line.productId, line.quantity - 1)
                            }
                          >
                            <Minus size={14} />
                          </button>
                          <span>{line.quantity}</span>
                          <button
                            type="button"
                            aria-label="Más"
                            onClick={() =>
                              setQuantity(line.productId, line.quantity + 1)
                            }
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="cart-line__end">
                        <span className="cart-line__total">
                          {formatCOP(line.product.price * line.quantity)}
                        </span>
                        <button
                          type="button"
                          className="cart-line__remove"
                          aria-label="Eliminar"
                          onClick={() => removeItem(line.productId)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <footer className="cart-drawer__foot">
                <div className="cart-drawer__subtotal">
                  <span>Subtotal referencia</span>
                  <strong>{formatCOP(subtotal)}</strong>
                </div>
                <p className="cart-drawer__note">
                  Precio final confirmado por WhatsApp según disponibilidad.
                </p>
                <button
                  type="button"
                  className="btn btn--whatsapp btn--full"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle size={18} />
                  Pedir por WhatsApp
                </button>
                <Link
                  to="/reservar"
                  className="btn btn--outline-dark btn--full"
                  onClick={closeCart}
                >
                  Ir a reservar estadía <ArrowRight size={16} />
                </Link>
                <button
                  type="button"
                  className="cart-drawer__clear"
                  onClick={clearCart}
                >
                  Vaciar carrito
                </button>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
