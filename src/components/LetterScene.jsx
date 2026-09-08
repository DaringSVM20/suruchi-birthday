import { useState } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "../config.js";
import Confetti from "./Confetti.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LetterScene() {
  const [wished, setWished] = useState(false);

  return (
    <motion.div
      className="scene"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card-surface">
        <motion.p
          className="script"
          style={{ fontSize: "2.4rem", color: "var(--lilac-deep)", margin: 0 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Happy {CONFIG.age}th, {CONFIG.name}
        </motion.p>

        <motion.div
          className="letter-body"
          style={{ marginTop: 16 }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {CONFIG.message.map((p, i) => (
            <motion.p key={i} variants={item}>
              {p}
            </motion.p>
          ))}
          <motion.p className="signature script" variants={item}>
            with love, {CONFIG.from} 💜
          </motion.p>
        </motion.div>

        <motion.button
          className="btn ghost"
          onClick={() => setWished(true)}
          whileTap={{ scale: 0.96 }}
        >
          {wished ? "🌸 sent with love" : "tap for a little sparkle"}
        </motion.button>
        <Confetti burst={wished} />
      </div>
    </motion.div>
  );
}
