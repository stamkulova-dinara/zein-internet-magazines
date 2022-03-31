import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../assets/styles/slider.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const carouselData = [
  {
    image:
      "https://altermoda.ru/bundles/ostrovweb/images/o-kompanii/main_new_600x1920.jpg",
  },
  {
    image:
      "https://www.lovemodestfashion.com/image/cache/catalog/banner-new-1-1920x600.jpg",
  },
  {
    image:
      "https://www.lovemodestfashion.com/image/cache/catalog/banner-new-2-1920x600.jpg",
  },
  {
    image:
      "https://themes09.anvanto.com/super/themes/charme_3_mini/modules/anthemeblocks/images/6034f93609572.jpg",
  },
];

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {carouselData.map((el) => (
          <SwiperSlide>
            <img src={el.image} className={style.slider_image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
