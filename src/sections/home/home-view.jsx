import React, { useEffect, useRef } from "react";
import Header from "./comp/header";
import CarteCadeau from "../spa-details/comp/carte-cadeau";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ButtonIcon from "../../components/button-icon/button-icon";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { paths } from "../../router/paths";
import Card from "../../components/card/card";

export default function HomeView() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const renderMiniCard = (
    <div className="flex flex-col items-center">
      <img
        className="max-h-60 max-w-56 mb-2 rounded-md"
        src="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
        alt=""
      />
      <span className="text-xl font-bold text-center text-secondary">
        Nos valeurs{" "}
      </span>
    </div>
  );

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Saint-Valentin : notre sélection{" "}
          <div className="text-[#777676]">
            Des offres pensées pour célébrer l'amour
          </div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
        </div>
        <div className="text-center">
          <ButtonIcon icon={<FaRegArrowAltCircleRight />} title="Découvrir" />
        </div>
      </div>
      <CarteCadeau />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Nos destinations insolites{" "}
          <div className="text-[#777676]">
            Des lieux d’exception pour des espaces inoubliables .
          </div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
        </div>
        <div className="text-center">
          <ButtonIcon
            icon={<FaRegArrowAltCircleRight />}
            title="DÉCOUVRIR TOUTES LES OFFRES"
          />
        </div>
      </div>
      <div className="my-16 max-w-6xl mx-auto">
        <h3 className="text-secondary text-4xl font-bold">
          L’essence de Spa & Prestige Collection
        </h3>
        <h3 className="text-[#777676] text-4xl font-bold">
          Une invitation à l’art du bien-être et de la découverte
        </h3>
        <div className="flex items-center  gap-2 mt-12">
          <div className="flex gap-4">
            <button
              ref={prevRef}
              className="rounded-full bg-white text-secondary shadow-md p-2 text-4xl"
            >
              <MdOutlineNavigateBefore />
            </button>
            <button
              ref={nextRef}
              className="rounded-full bg-secondary text-primary shadow-md p-2 text-4xl"
            >
              <MdOutlineNavigateNext />
            </button>
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // Connect navigation manually
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            spaceBetween={20}
            className="w-full"
          >
            {[...Array(7)].map((_, i) => (
              <SwiperSlide key={i}>{renderMiniCard}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Lorem Ipsum es calor{" "}
          <div className="text-[#777676]">
            Atiusminus calori per danium coles
          </div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
          <Card
            type="large"
            to="/spa/paris"
            title="Le Spa by Sothys Paris République 5*"
            description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
          />
        </div>
        <div className="text-center">
          <ButtonIcon
            icon={<FaRegArrowAltCircleRight />}
            title="DÉCOUVRIR TOUTES LES OFFRES"
          />
        </div>
      </div>
      <div className="bg-primary rounded-lg my-12">
        <div className="max-w-6xl mx-auto py-4">
          <h2 className="text-4xl font-bold text-center">
            Les soins à la une{" "}
            <div className="text-[#777676]">
              Atiusminus calori per danium coles
            </div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            <Card
              type="price"
              to="/spa/paris"
              title="Le Spa by Sothys Paris République 5*"
              prestation="MASSAGE BALINAIS (85 min)"
              description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
              image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
              location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
              price={120}
            />
            <Card
              type="price"
              to="/spa/paris"
              title="Le Spa by Sothys Paris République 5*"
              prestation="MASSAGE BALINAIS (85 min)"
              description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
              image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
              location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
              price={120}
            />
            <Card
              type="price"
              to="/spa/paris"
              title="Le Spa by Sothys Paris République 5*"
              prestation="MASSAGE BALINAIS (85 min)"
              description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
              image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
              location="75011 PARIS - ÎLE-DE-FRANCE - FRANCE"
              price={120}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-2">
          <Card
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam nisi iste consequuntur neque asperiores non, incidunt
              blanditiis omnis cumque.`}
            type=""
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            to={paths.main}
            title=" Nos valeurs"
          />
          <Card
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam nisi iste consequuntur neque asperiores non, incidunt
              blanditiis omnis cumque.`}
            type=""
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            to={paths.main}
            title=" Nos valeurs"
          />
          <Card
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam nisi iste consequuntur neque asperiores non, incidunt
              blanditiis omnis cumque.`}
            type=""
            image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
            to={paths.main}
            title=" Nos valeurs"
          />
        </div>
      </div>

      <div className="bg-primary rounded-lg my-12">
        <div className="max-w-6xl mx-auto py-4">
          <h2 className="text-4xl font-bold text-center">Actualités </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card
              type="news"
              to="/spa/paris"
              title="Le Spa by Sothys Paris République 5*"
              description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
              image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
              date="20 avril 2025"
            />
            <Card
              type="news"
              to="/spa/paris"
              title="Le Spa by Sothys Paris République 5*"
              description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
              image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
              date="20 avril 2025"
            />
            <Card
              type="news"
              to="/spa/paris"
              title="Le Spa by Sothys Paris République 5*"
              description="Le Spa Sothys, niché au sein du Renaissance Paris République Hotel, incarne l’exclusivité et le raffinement des rituels de bien-être."
              image="https://spa-prestige-collection.com/wp-content/uploads/2025/03/SPC-Essence-1975x1318-02.jpg"
              date="20 avril 2025"
            />
          </div>
        </div>
      </div>

      <div className="bg-white my-12 rounded-lg">
        <div className="max-w-6xl m-auto py-12 flex justify-between">
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide className="">
              <img
                className="mx-auto"
                src="https://swissline-cosmetics.com/cdn/shop/files/swissline-logo.svg?v=1706103369&width=180"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="mx-auto"
                src="https://swissline-cosmetics.com/cdn/shop/files/swissline-logo.svg?v=1706103369&width=180"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="mx-auto"
                src="https://swissline-cosmetics.com/cdn/shop/files/swissline-logo.svg?v=1706103369&width=180"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="mx-auto"
                src="https://swissline-cosmetics.com/cdn/shop/files/swissline-logo.svg?v=1706103369&width=180"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="mx-auto"
                src="https://swissline-cosmetics.com/cdn/shop/files/swissline-logo.svg?v=1706103369&width=180"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
