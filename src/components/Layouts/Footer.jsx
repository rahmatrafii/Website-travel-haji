import React from "react";
import FooterIcon from "../Fragments/FooterIcon";

const Footer = () => {
  return (
    <footer className="pt-14 pb-4 bg-slate-400">
      <div className="container mx-auto px-4">
        <div className="md:flex  flex-wrap justify-between gap-3 lg:gap-0 items-start mb-5">
          <div className=" p-4 md:w-[45%] lg:w-[30%]">
            <h3 className="text-xl font-semibold mb-1 flex items-center">
              <img src="/logo/kakbah.svg" alt="" className="w-[50px] mr-2 " />
              Kami
            </h3>
            <p>
              <b>Kami</b> merupakan biro jasa umrah dan haji khusus yang telah
              terpercaya dengan tourleader yang berpengalaman serta amanah
              mendampingi para jama’ah dan telah memiliki izin resmi dari
              Kementrian Agama sebagai PPIU No. U.576 Tahun 2020.
            </p>
          </div>
          <div className=" p-4  md:w-[45%] lg:w-1/4">
            <h3 className="text-xl font-semibold mb-2">Jam Kerja</h3>
            <ul>
              <li>Senin – Sabtu (Kecuali Hari Libur)</li>
              <li>Pukul 08.00 – 16.00 wib</li>
            </ul>
          </div>
          <div className=" p-4  md:w-[45%] lg:w-1/4">
            <h3 className="text-xl font-semibold mb-2">Alamat</h3>
            <p>
              PT. Kami beralamatkan di Jln. KHR. Moch. Rosyid No. 100 desa Pacul
              , Kec. Bojonegoro, Bojonegoro, Jawa Timur.
            </p>
            <p>Kode Pos : 62114</p>
          </div>
          <div className=" p-4  md:w-[45%] lg:w-[20%]">
            <h3 className="text-xl font-semibold">Ikuti Kami</h3>
            <div className="flex gap-x-4 mt-7">
              <FooterIcon nama="facebook" />
              <FooterIcon nama="instagram" />
              <FooterIcon nama="youtube" />
            </div>
          </div>
        </div>
        <p className="font-light text-xs lg:text-base text-center">
          Copyright © 2023 Kami | Powered by Kami
        </p>
      </div>
    </footer>
  );
};

export default Footer;
