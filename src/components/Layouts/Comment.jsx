import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import CommentCard from "../Fragments/CommentCard";

const Comment = () => {
  return (
    <section className="pt-28  pb-10">
      <div className="container mx-auto px-4">
        <div className="mb-9 ">
          <h1
            className="text-center font-sans mb-5 text-3xl font-semibold text-orange-500 pl-2 border-l-2 border-orange-500 w-max"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            Ulasan Jama'ah
          </h1>
          <p
            className="text-slate-800"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            Ini adalah Beberapa Ulasan Para Jama'ah kepada Kami
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={20}
          draggable={true}
          grabCursor={true}
          slidesPerGroupSkip={1}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 2,
            },
            1280: {
              slidesPerView: 3,
              slidesPerGroup: 2,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper py-7 px-7 lg:px-2"
        >
          <SwiperSlide>
            <CommentCard>
              <CommentCard.Head>Muhammad Ivan</CommentCard.Head>
              <CommentCard.Coment>
                "Kami satu-satuna biro umrah lokal yang sudah mandiri di
                Bojonegoro. Saya pikir awalnya seperti biro lain yang masih ikut
                biro besar, Tetapi kenyataanya tidak seperti itu. Kami
                benar-benar mandiri mulai dari memilih pesawat, hotel dan
                mempunyai tim yang bekerja maksimal di kota Jeddah, Mekah dan
                Madinah. Semoga Kami bertambah banyak jama'ahnya. Aamiin"
              </CommentCard.Coment>
            </CommentCard>
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard>
              <CommentCard.Head>Puji Utomo</CommentCard.Head>
              <CommentCard.Coment>
                "Saya sering ikut Umrah dengan biro lain. Tapi dari sekian
                banyak biro umrah yang pernah saya ikuti paling cocok ikut Kami.
                Karena di Kami solid, ramah, dan sangat baik dalam melayani
                jama'ah umrah. Apalagi Kami adalah biro umrah lokal Bojonegoro.
                jadi merasa aman dan tenang dan ikut umrah bareng Kami"
              </CommentCard.Coment>
            </CommentCard>
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard>
              <CommentCard.Head>Ridwan Kamil</CommentCard.Head>
              <CommentCard.Coment>
                "Saya sering ikut Umrah dengan biro lain. Tapi dari sekian
                banyak biro umrah yang pernah saya ikuti paling cocok ikut Kami.
                Karena di Kami solid, ramah, dan sangat baik dalam melayani
                jama'ah umrah. Apalagi Kami adalah biro umrah lokal Bojonegoro.
                jadi merasa aman dan tenang dan ikut umrah bareng Kami"
              </CommentCard.Coment>
            </CommentCard>
          </SwiperSlide>
          <SwiperSlide>
            <CommentCard>
              <CommentCard.Head>Ahmad Tirta</CommentCard.Head>
              <CommentCard.Coment>
                "Kami satu-satuna biro umrah lokal yang sudah mandiri di
                Bojonegoro. Saya pikir awalnya seperti biro lain yang masih ikut
                biro besar, Tetapi kenyataanya tidak seperti itu. Kami
                benar-benar mandiri mulai dari memilih pesawat, hotel dan
                mempunyai tim yang bekerja maksimal di kota Jeddah, Mekah dan
                Madinah. Semoga Kami bertambah banyak jama'ahnya. Aamiin"
              </CommentCard.Coment>
            </CommentCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Comment;
