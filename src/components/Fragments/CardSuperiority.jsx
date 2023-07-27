import React from "react";

const CardSuperiority = ({ children }) => {
  return (
    <div
      className="p-4 md:w-[340px] lg:w-[315px] xl:w-[400px] rounded-2xl relative hover:shadow-orange-500 cursor-default hover:shadow-2xl transition duration-500 text-center bg-white mb-20"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      {children}
    </div>
  );
};

const Icon = ({ icon }) => {
  return (
    <div className="p-3 bg-white rounded-2xl shadow-md shadow-orange-400 w-[110px] absolute left-1/2 -translate-x-1/2 -top-14 ">
      <img src={`/logo/${icon}.svg`} alt="" className="h-full" />
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <h3 className="mt-12 text-2xl text-black mb-2 font-semibold">{children}</h3>
  );
};

const Description = ({ children }) => {
  return <p className="text-slate-800 text-base">{children}</p>;
};

CardSuperiority.Icon = Icon;
CardSuperiority.Title = Title;
CardSuperiority.Description = Description;

export default CardSuperiority;
