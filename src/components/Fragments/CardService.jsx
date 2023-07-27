import React from "react";

const CardService = ({ title, image }) => {
  return (
    <div className="mb-10 ">
      <div
        className=" "
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="700"
      >
        <h4 className="mb-2 text-lg font-sans font-semibold">{title}</h4>
      </div>
      <img
        src={`/image/${image}`}
        alt=""
        className="sm:w-[290px] shadow-xl  md:w-[340px] lg:w-[310px] xl:w-[350px] rounded-lg overflow-hidden "
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="700"
      />
    </div>
  );
};

export default CardService;
