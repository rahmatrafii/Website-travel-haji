import React from "react";
import FooterIcon from "../Fragments/FooterIcon";

const Main = () => {
  return (
    <section className="lg:h-screen pt-20 lg:pt-32 pb-10 ">
      <img
        src="/logo/bulan.svg"
        className="w-[70px] absolute right-10 top-20 xl:top-28 md:block hidden animate-updown"
        alt=""
      />
      <img
        src="/image/lentera.png"
        className="w-[200px] absolute animate-goyang origin-top right-16 top-6"
        alt=""
      />
      <img
        src="/image/lentera.png"
        className="w-[200px] absolute xl:left-2 -top-14 lg:left-0 lg:z-[2] animate-goyang origin-top duration-1000 hidden sm:block"
        alt=""
        data-aos="fade-right"
        data-aos-offset="50"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />
      <div className="container relative z-[1] mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div
            className="w-full lg:w-[50%] justify-start  rounded-3xl overflow-hidden  flex items-center"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <img src="/image/Home4.png" alt="" className="w-full" />
          </div>
          <div className="w-full lg:w-[50%] mt-16">
            <h1
              className="text-center mb-5 font-sans text-3xl font-semibold text-orange-500 pl-2 border-l-2 border-orange-500 w-max"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Baru Pertama Kali Umroh?
            </h1>
            <h3
              className="text-4xl font-bold mb-5"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Pilih Kami untuk mendampingi anda!
            </h3>
            <p
              className="text-slate-800 mb-7"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Kami merupakan biro jasa umrah dan haji khusus yang telah
              terpercaya dengan tourleader yang berpengalaman serta amanah
              mendampingi para jama’ah dan telah memiliki izin resmi dari
              Kementrian Agama.
            </p>
            <button
              className="bg-green-500 flex rounded-xl px-3 py-2 items-center mb-7 hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src="/logo/whatsapp.svg" alt="" className="w-[40px] mr-2" />
              <p className="text-white">Pesan sekarang!</p>
            </button>
            <div
              className="flex gap-x-5"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <FooterIcon nama="facebook" />
              <FooterIcon nama="instagram" />
              <FooterIcon nama="youtube" />
            </div>
          </div>
        </div>
      </div>
      <a
        href=""
        className="fixed items-center left-8 py-2 px-6 shadow-xl flex bg-green-500 rounded-full bottom-10 z-[999]"
      >
        <img src="/logo/whatsapp.svg" className="w-[35px] mr-2" alt="" />
        <p className="text-white text-sm">Pesan sekarang</p>
      </a>
    </section>
  );
};

export default Main;
