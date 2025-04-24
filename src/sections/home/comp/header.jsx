import React from "react";
import { illustration1, illustration2 } from "../../../assets/illustration";
import ButtonIcon from "../../../components/button-icon/button-icon";
import { FaStar } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-primary rounded-xl max-w-6xl w-full mx-auto mb-8 min-h-32 relative overflow-hidden">
      <img
        src={illustration1}
        alt=""
        className="absolute right-0 h-full hidden lg:block"
      />
      <img
        src={illustration2}
        alt=""
        className="absolute left-0 h-full hidden lg:block"
      />
      <div className="text-center w-full flex flex-col z-10 relative items-center p-4 lg:p-16">
        <p className="text-secondary text-2xl font-bold lg:w-1/2 uppercase mb-4">
          Rejoignez la Communauté Privée Spa & Prestige Collection ! Plongez
          dans un univers d’exception et laissez-vous séduire par des
          privilèges rares et uni ues…
        </p>
        <ButtonIcon title="NOS AVANTAGES" icon={<FaStar />} />
      </div>
    </div>
  );
}
