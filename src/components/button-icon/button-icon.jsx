import React from "react";  
import { Link } from "react-router-dom";  

export default function ButtonIcon({  
  icon,  
  title,  
  link = "#",  
  sx = "",  
  size = "md", // default size  
  variant = "filled", // default variant  
}) {  
  const sizeStyles = {  
    sm: "px-4 py-2 text-xs",  
    md: "px-6 py-3 text-sm",  
    lg: "px-8 py-4 text-base",  
  };  

  const variantStyles = {  
    filled: "bg-secondary text-white hover:bg-black",  
    outlined: "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white",  
    link: "text-secondary underline hover:text-black bg-transparent",  
  };  

  return (  
    <Link  
      to={link}  
      className={`inline-flex rounded-sm items-center gap-2 uppercase font-bold tracking-widest transition-all duration-300 ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.filled} ${sx}`}  
    >  
      {icon && <span>{icon}</span>}  
      {title}  
    </Link>  
  );  
}  