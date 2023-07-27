import React from "react";

const CardTour = ({ children }) => {
  return (
    <div className="mb-20 flex flex-col items-center md:w-1/2  justify-between ">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <h1
      className="text-center text-xl font-semibold mb-5"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      {children}
    </h1>
  );
};

const Image = ({ image }) => {
  return (
    <div
      className="border-4 w-[290px] lg:w-[350px] xl:w-[400px] border-orange-500 shadow-xl  mb-5"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="100"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      <img src={`/image/${image}`} alt="" className=" w-full" />
    </div>
  );
};

const Button = ({ children }) => {
  return (
    <button
      className="px-4 py-2 border border-orange-500  bg-orange-500 text-white hover:shadow-lg transition duration-300 rounded-lg"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="150"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      {children}
    </button>
  );
};
CardTour.Title = Title;
CardTour.Image = Image;
CardTour.Button = Button;

export default CardTour;
