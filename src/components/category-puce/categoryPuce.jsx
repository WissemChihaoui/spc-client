import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryPuce({
  link = "#",
  icon = null,
  title = "",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to={link}
        className="group inline-block rounded-full min-w-24 bg-secondary px-6 py-2"
      >
        <div className="flex items-center gap-2 text-center text-primary relative">
          <span className="rounded-full bg-primary text-secondary p-1">
            {icon}
          </span>
          <div className="relative">
            <span className="text-primary">{title}</span>
            {/* Underline animation */}
            <motion.span
              className="block h-0.5 bg-primary absolute left-0 -bottom-1 origin-left scale-x-0 group-hover:scale-x-100"
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
