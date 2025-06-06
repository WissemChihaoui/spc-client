import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1615789885218-5d9292457126?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1657803778392-0274a0b81770?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615789885218-5d9292457126?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function ImageCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % images.length, 1]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex(([prev]) => [(prev + 1) % images.length, 1]);

  const prev = () =>
    setIndex(([prev]) => [prev === 0 ? images.length - 1 : prev - 1, -1]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      next();
    } else if (info.offset.x > 100) {
      prev();
    }
  };

  return (
    <div className="relative w-full h-96 mx-auto overflow-hidden md:rounded-xl shadow-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
          className="absolute w-full h-full object-cover cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"
      >
        ▶
      </button>
    </div>
  );
}
