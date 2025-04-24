import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { CATEGORIES } from "../_mock/categories";
import CategoryPuce from "../components/category-puce/categoryPuce";

export default function LayoutTheme({ children }) {
  return (
    <div className="min-h-screen bg-background ">
      <div className="container m-auto">
        <Navbar />
        <div className="flex flex-wrap gap-4 mx-auto items-center justify-center mb-4">
                {CATEGORIES.map((category, index) => (
                  <CategoryPuce
                  key={index}
                    title={category.title}
                    icon={category.icon}
                    link={category.link}
                  />
                ))}
              </div>
        <div className="py-12">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
