import React from "react";
import CardService from "../Fragments/CardService";

const Services = () => {
  return (
    <section className="pt-24 pb-10">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <h1
            className="text-center font-sans text-3xl font-semibold mb-5 text-orange-500 pl-2 border-l-2 border-orange-500 w-max"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            Layanan Kami
          </h1>
          <p
            className="text-slate-800"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            Ini adalah Beberapa Layanan Kami, dan masih banyak lagi yang akan
            berikan ke pada anda
          </p>
        </div>
        <div className="wrap sm:flex flex-wrap justify-evenly items-center ">
          <CardService title="Obat-Obatan dan Vitamin" image="obat.jpg" />
          <CardService title="Manajemen Istirahat" image="istirahat.jpg" />
          <CardService title="mendampingi berbelanja" image="shop.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Services;
