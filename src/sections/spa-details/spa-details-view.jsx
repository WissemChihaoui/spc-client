import React from "react";
import ImageCarousel from "./comp/image-carousel";
import DetailsCard from "./comp/details-card";
import logoD from "../../assets/logo-d.jpg";
import InfoCard from "./comp/info-card";
import Services from "./comp/services";
import CarteCadeau from "./comp/carte-cadeau";
import logoSpc from "../../assets/logo-small.png"
import LocationSection from "./comp/location-section";
import TestimonialsSection from "./comp/others-section";
export default function SpaDetailsView() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
          <ImageCarousel />
        </div>
        <DetailsCard
          details={{
            name: "David Grand Spa – Villerest",
            logo: logoD,
            description: `DaviD GranD Spa est un lieu de bien-être unique situé à Villerest, à proximité de Roanne. Il vous invite à vivre une véritable expérience de détente et de ressourcement, dans une parfaite harmonie entre le corps et l’esprit.
                    Conçu pour ceux qui recherchent une pause régénérante, notre spa vous propose une large gamme de soins sur mesure, adaptés à vos besoins : massages relaxants, soins du visage, gommages, rituels personnalisés... le tout dans une atmosphère apaisante et chaleureuse.
        
                    Notre équipe d’expert(e)s est à votre écoute pour vous offrir une expérience de bien-être inégalée, en utilisant des produits haut de gamme comme ceux de la marque Altéarah.
        
                    Notre mission : vous accompagner dans un véritable lâcher-prise. Grâce à notre savoir-faire et notre attention portée aux moindres détails, nous vous aidons à éliminer le stress, revitaliser votre corps et nourrir votre bien-être intérieur.
        
                    Réservez dès maintenant votre moment d’évasion et découvrez l’expérience DaviD GranD Spa.`,
          }}
        />
      </div>
      <InfoCard />
      <Services />
      <CarteCadeau />
      <div className="bg-white max-w-6xl w-full rounded-xl mx-auto">
          <div className="flex flex-col items-center p-12 text-center">
            <img src={logoSpc} alt="" className="w-36 mb-4"/>
            <h3 className="text-4xl font-bold mb-4">– Le conseil Spa & Prestige Collection –</h3>
            <p className="text-xl font-bold ">Au bord de la rivière du Dourdou, avec comme fond sonore, le bruit de l’eau, la terrasse extérieure est le point culminant pour apprécier la nature bucolique vous entoure.</p>
          </div>
      </div>

      <LocationSection />
      <TestimonialsSection />
    </div>
  );
}
