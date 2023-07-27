import React from "react";
import CardTour from "../Fragments/CardTour";

const Tour = () => {
  return (
    <section className="pt-20 pb-5 bg-slate-400">
      <div className="container mx-auto px-4">
        <div className="sm:flex gap-x-1 justify-evenly">
          <CardTour>
            <CardTour.Title>Paket Haji</CardTour.Title>
            <CardTour.Image image="HAJI.png" />
            <CardTour.Button>Lihat semua paket Haji</CardTour.Button>
          </CardTour>
          <CardTour>
            <CardTour.Title>Paket Umrah</CardTour.Title>
            <CardTour.Image image="UMRAH.png" />
            <CardTour.Button>Lihat semua paket Umrah</CardTour.Button>
          </CardTour>
        </div>
      </div>
    </section>
  );
};

export default Tour;
