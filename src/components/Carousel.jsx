import React from "react";
import {Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../assets/styles/slider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

const carouselData = [
  {
    id: 1,
    image:
      "https://altermoda.ru/bundles/ostrovweb/images/o-kompanii/main_new_600x1920.jpg",
  },
  {
    id: 2,
    image:
      "https://www.lovemodestfashion.com/image/cache/catalog/banner-new-1-1920x600.jpg",
  },
  {
    id: 3,
    image:
      "https://www.lovemodestfashion.com/image/cache/catalog/banner-new-2-1920x600.jpg",
  },
  {
    id: 4,
    image:
      "https://themes09.anvanto.com/super/themes/charme_3_mini/modules/anthemeblocks/images/6034f93609572.jpg",
  },
];

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[ Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {carouselData.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={el.image} className={style.slider_image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
