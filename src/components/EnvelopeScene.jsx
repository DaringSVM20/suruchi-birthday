import { useState } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "../config.js";

export default function EnvelopeScene({ onDone }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(onDone, 950);
  };

  return (
    <motion.div
      className="scene"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <div className="envelope-wrap">
        <div className="envelope">
          {!open && (
            <motion.button
              className="seal"
              aria-label="Open envelope"
              onClick={handleOpen}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              whileTap={{ scale: 0.9 }}
            >
              💌
            </motion.button>
          )}
          <motion.div
            className="flap"
            style={{ transformOrigin: "top" }}
            animate={{ rotateX: open ? 180 : 0 }}
            transition={{ duration: 0.9, ease: [0.6, 0.05, 0.2, 1] }}
          />
        </div>
      </div>
      <motion.p
        className="prompt-label"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A little something for {CONFIG.name} — tap the seal to open
      </motion.p>
    </motion.div>
  );
}
