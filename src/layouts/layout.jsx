import React from "react";
import Navbar from "../components/navbar/navbar";
import { CATEGORIES } from "../_mock/categories";
import CategoryPuce from "../components/category-puce/categoryPuce";
import Footer from "../components/footer/footer";

export default function LayoutTheme({ children }) {
  return (
    <div className="min-h-screen bg-background ">
      <div className="container m-auto">
        <Navbar />
        <div>
          <div className="flex flex-wrap gap-4 mx-auto items-center justify-center">
            {CATEGORIES.map((category) => (
              <CategoryPuce
                title={category.title}
                icon={category.icon}
                link={category.link}
              />
            ))}
          </div>
        </div>
        <div className="py-12">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
