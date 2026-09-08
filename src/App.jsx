import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PetalField from "./components/PetalField.jsx";
import EnvelopeScene from "./components/EnvelopeScene.jsx";
import CakeScene from "./components/CakeScene.jsx";
import LetterScene from "./components/LetterScene.jsx";
import { CONFIG } from "./config.js";

export default function App() {
  const [stage, setStage] = useState("envelope"); // envelope -> cake -> letter

  return (
    <div className="app-root">
      <PetalField />
      <AnimatePresence mode="wait">
        {stage === "envelope" && (
          <EnvelopeScene key="envelope" onDone={() => setStage("cake")} />
        )}
        {stage === "cake" && <CakeScene key="cake" onDone={() => setStage("letter")} />}
        {stage === "letter" && <LetterScene key="letter" />}
      </AnimatePresence>
      <div className="footer-note">made with 💜 for {CONFIG.name}</div>
    </div>
  );
}
