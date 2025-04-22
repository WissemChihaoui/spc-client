import React from "react";
import ImageCarousel from "./comp/image-carousel";
import DetailsCard from "./comp/details-card";
import logoD from "../../assets/logo-d.jpg";
import InfoCard from "./comp/info-card";
import Services from "./comp/services";
export default function SpaDetailsView() {
  return (
    <div>
        <div className="grid grid-cols-2 gap-4">
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
    </div>
  );
}
