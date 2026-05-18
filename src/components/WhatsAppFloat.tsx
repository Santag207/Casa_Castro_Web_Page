import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsAppInquiry } from "../lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <motion.button
      type="button"
      className="whatsapp-float"
      onClick={() => openWhatsAppInquiry()}
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={26} fill="currentColor" strokeWidth={0} />
      <span className="whatsapp-float__pulse" aria-hidden />
    </motion.button>
  );
}
