import React from "react";

const CommentCard = ({ children }) => {
  return (
    <div
      className="card p-4 border border-orange-500 rounded-2xl shadow-xl"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      {children}
    </div>
  );
};

const Head = ({ children, rate }) => {
  return (
    <div className="flex mb-2">
      <img src="/logo/male.svg" alt="" className="w-[40px]" />
      <div>
        <h4>{children}</h4>
        <div className="flex">
          <img src="/logo/star.svg" alt="" className="w-[25px]" />
          <img src="/logo/star.svg" alt="" className="w-[25px]" />
          <img src="/logo/star.svg" alt="" className="w-[25px]" />
          <img src="/logo/star.svg" alt="" className="w-[25px]" />
          <img src="/logo/star.svg" alt="" className="w-[25px]" />
        </div>
      </div>
    </div>
  );
};

const Coment = ({ children }) => {
  return <p className="font-normal">{children}</p>;
};

CommentCard.Head = Head;
CommentCard.Coment = Coment;

export default CommentCard;
