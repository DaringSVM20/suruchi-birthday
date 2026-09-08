import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = ["#b9a2df", "#e7bfe0", "#e8c87e", "#7c5cbf", "#fff"];

export default function Confetti({ burst }) {
  const pieces = useMemo(() => {
    if (!burst) return [];
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: 2.2 + Math.random() * 1.6,
      delay: Math.random() * 0.4,
      w: 5 + Math.random() * 5,
      h: 8 + Math.random() * 8,
    }));
  }, [burst]);

  return (
    <AnimatePresence>
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="confetti-piece"
          style={{ left: `${p.left}vw`, background: p.color, width: p.w, height: p.h }}
          initial={{ y: "-5vh", opacity: 1, rotate: 0 }}
          animate={{ y: "120vh", rotate: 540, opacity: 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: p.duration, delay: p.delay, ease: "linear" }}
        />
      ))}
    </AnimatePresence>
  );
}
