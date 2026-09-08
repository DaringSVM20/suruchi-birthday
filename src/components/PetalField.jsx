import { useMemo } from "react";
import { motion } from "framer-motion";

const EMOJI = ["🌸", "💜", "🪻", "✨", "🤍"];

export default function PetalField() {
  const petals = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 1.1,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * -20,
        driftX: Math.random() * 80 - 40,
        emoji: EMOJI[Math.floor(Math.random() * EMOJI.length)],
      })),
    []
  );

  return (
    <div className="petal-field">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="petal"
          style={{ left: `${p.left}vw`, fontSize: `${p.size}rem` }}
          initial={{ y: "-10vh", x: 0, rotate: 0 }}
          animate={{ y: "112vh", x: p.driftX, rotate: 320 }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}
