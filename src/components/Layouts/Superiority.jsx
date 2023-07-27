import React from "react";
import CardSuperiority from "../Fragments/CardSuperiority";

const Superiority = () => {
  return (
    <section className="pt-32 pb-10 bg-slate-400">
      <div className="container mx-auto px-5">
        <div className="md:flex justify-evenly  lg:justify-between flex-wrap ">
          <CardSuperiority>
            <CardSuperiority.Icon icon="license" />
            <CardSuperiority.Title>
              izin Resmi dari Kemenag
            </CardSuperiority.Title>
            <CardSuperiority.Description>
              Kami telah memiliki ijn resmi dari Kemenag sebagai Penyelenggara
              Perjalanan Ibadah Umrah (PPIU) dan Penyelenggara Ibadah Haji
              Khusus (PIHK) dengan ijin Kemenag No0 U.576 Tahun 2020.
            </CardSuperiority.Description>
          </CardSuperiority>
          <CardSuperiority>
            <CardSuperiority.Icon icon="people" />
            <CardSuperiority.Title>Amanah Mendampingi</CardSuperiority.Title>
            <CardSuperiority.Description>
              Kami merupakan biro jasa umrah dan haji khusus yang telah
              terpercaya dengan tourleader yang berpengalaman serta amanah
              mendampingi para jamaáh
            </CardSuperiority.Description>
          </CardSuperiority>
          <CardSuperiority>
            <CardSuperiority.Icon icon="verified" />
            <CardSuperiority.Title>
              Garansi Pasti Berangkat
            </CardSuperiority.Title>
            <CardSuperiority.Description>
              Kami menerapkan SISTEM KOMPUTERISASI PENGELOLAAN TERPADU UMRAH DAN
              HAJI KHUSUS yang di awasi dan dipantau oleh KEMENAG (SISKOPATUH)
            </CardSuperiority.Description>
          </CardSuperiority>
        </div>
      </div>
    </section>
  );
};

export default Superiority;
