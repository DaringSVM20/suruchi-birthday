import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFIG } from "../config.js";
import Confetti from "./Confetti.jsx";

export default function CakeScene({ onDone }) {
  const [lit, setLit] = useState([true, true, true]);
  const allOut = lit.every((v) => !v);
  const [advancing, setAdvancing] = useState(false);

  const blow = (i) => {
    if (!lit[i]) return;
    const next = [...lit];
    next[i] = false;
    setLit(next);
  };

  useEffect(() => {
    if (allOut && !advancing) {
      setAdvancing(true);
      setTimeout(onDone, 1300);
    }
  }, [allOut, advancing, onDone]);

  return (
    <motion.div
      className="scene"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card-surface">
        <p className="headline serif" style={{ fontSize: "1.5rem" }}>
          Make a wish
        </p>
        <div className="cake-stage" style={{ marginTop: 84 }}>
          <div className="cake">
            <div className="num-candle">{CONFIG.age}</div>
            <div className="candle-row">
              {lit.map((isLit, i) => (
                <div className="candle" key={i} onClick={() => blow(i)}>
                  <AnimatePresence>
                    {isLit && (
                      <motion.div
                        className="flame"
                        style={{ transformOrigin: "50% 100%" }}
                        animate={{ scaleY: [1, 0.85, 1], rotate: [0, 3, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        exit={{ opacity: 0, scale: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="tier top">
              <div className="drip"></div>
            </div>
            <div className="tier bottom">
              <div className="drip"></div>
            </div>
          </div>
          <p className="hint">{allOut ? "🎉 Wish made." : "Tap each candle to blow it out"}</p>
        </div>
        <Confetti burst={allOut} />
      </div>
    </motion.div>
  );
}
