import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function LayoutTheme({ children }) {
  return (
    <div className="min-h-screen bg-background ">
      <div className="container m-auto">
        <Navbar />
        <div className="py-12">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
