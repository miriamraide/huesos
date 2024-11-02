"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import { Pagination, Navigation } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w:[80%]"
      loop={true}
      modules={[Pagination, Navigation]}
      style={{
        "--swiper-navigation-color": "#ffff",
        "--swiper-pagination-color": "#ffff",
        "--swiper-pagination-bottom ": "20px",
      }}
    >
      <SwiperSlide>
        <Image
          src="/bark-02-dogleash-support.jpg"
          width={300}
          height={200}
          alt="Producto"
          layout="responsive"
        />

        <Image
          src="/bark-05-fishbowl.jpg"
          width={300}
          height={200}
          alt="Producto"
          layout="responsive"
        />

        <Image
          src="/bark-23-catbed2.jpg"
          width={300}
          height={200}
          alt="Producto"
          layout="responsive"
        />

        <Image
          src="/bark-10-hamsterfood.jpg"
          width={300}
          height={200}
          alt="Producto"
          layout="responsive"
        />
        <Image
          src="/bark-14-birdcagenodoor.jpg"
          width={300}
          height={200}
          alt="Producto"
          layout="responsive"
        />

        <Image
          src="/bark-03-dogbowls.jpg"
          width={300}
          height={200}
          alt="Producto"
          layout="responsive"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export { SwiperComponent };
