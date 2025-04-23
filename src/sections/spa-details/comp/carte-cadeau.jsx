import React from "react";
// import { illustration1, illustration2 } from "../../../assets/illustration";
import carteCadeau from "../../../assets/SPC-icone-carte-cadeau.png";

export default function CarteCadeau() {
  return (
    <div style={{
        backgroundImage:
          "url(https://spa-prestige-collection.com/wp-content/uploads/2025/01/SPA-image-2000x833-03.jpg)",
      }} className="bg-primary rounded-xl max-w-6xl w-full mx-auto my-16 min-h-32 relative overflow-hidden">
      {/* <img src={illustration1} alt="" className="absolute right-0 h-full hidden lg:block" />
      <img src={illustration2} alt="" className="absolute left-0 h-full hidden lg:block" /> */}
      <div className="bg-[#f3ececa8] absolute w-full h-full"></div>
      <div className="text-center w-full flex flex-col z-10 relative items-center p-4 lg:p-16">
        <img src={carteCadeau} alt="" className="mb-4"/>
        <p className="text-secondary text-2xl font-bold lg:w-1/2 uppercase mb-4">
          JE COMMANDE une CARTE cadeau à utiliser dans un établissement SPA &
          PRESTIGE COLLECTION et je cumule des avantages
        </p>
        <button className="bg-secondary rounded-full px-8 py-2 text-primary font-bold">OFFRIR</button>
      </div>
    </div>
  );
}
