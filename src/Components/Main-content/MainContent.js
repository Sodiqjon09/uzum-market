import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MainContent.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function MainContent() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Link to="/">
          <img
            src="https://images.uzum.uz/ctgj0fb4nkds9ma177hg/main_page_banner.jpg"
            alt="uzum"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/">
          <img
            src="https://images.uzum.uz/ct8qhmei4n3ehka2dvd0/main_page_banner.jpg"
            alt="uzum"
          />
        </Link>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Link to="/">
          <img
            src="https://images.uzum.uz/ctfthb5pb7faledbld20/main_page_banner.jpg"
            alt="uzum"
          />
        </Link>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Link to="/">
          <img
            src="https://images.uzum.uz/ctemhb45j42dmkoiqbt0/main_page_banner.jpg"
            alt="uzum"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
