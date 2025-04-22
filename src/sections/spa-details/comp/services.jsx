import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TabButton from "../../../components/tabs/tab-button";
import TabPanel from "../../../components/tabs/tab-panel";
import TemplateBienEtre from "./template-bien-etre";
const tabs = [
  { label: "Bien-Être", content: <TemplateBienEtre /> },
  { label: "Hôtellerie", content: "Découvrez nos soins du visage, massages, et rituels relaxants." },
  { label: "Restauration", content: "“Une expérience incroyable !” – Marie D." },
  { label: "Services et équipements", content: "“Une expérience incroyable !” – Marie D." },
  { label: "Séjour", content: "“Une expérience incroyable !” – Marie D." },
];

export default function Tabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      {/* Tab Buttons */}
      <div className="relative flex justify-between border-b border-gray-300">
        {tabs.map((tab) => (
          <TabButton
            key={tab.label}
            label={tab.label}
            active={active.label === tab.label}
            onClick={() => setActive(tab)}
          />
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.label}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="p-6 bg-white rounded-lg shadow mt-4"
        >
          <TabPanel content={active.content} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
