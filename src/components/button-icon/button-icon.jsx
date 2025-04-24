import React from "react";
import { Link } from "react-router-dom";

export default function ButtonIcon({
  icon,
  title,
  link = "#",
  sx = "",
  size = "md", // default size
}) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <Link
      to={link}
      className={`inline-flex rounded-sm items-center gap-2 bg-secondary text-white uppercase font-bold tracking-widest hover:bg-black transition-all duration-300 ${sizeStyles[size] || sizeStyles.md} ${sx}`}
    >
      {icon && <span>{icon}</span>}
      {title}
    </Link>
  );
}
