import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CaroselComponent = () => {
  const [state, setState] = useState([]);

  const carouselImage = async () => {
    const data = await fetch(
      "https://623c10012e056d1037f94796.mockapi.io/api/v1/collection/11"
    );
    const json = await data.json();
    setState(json);
    console.log(state);
  };

  useEffect(() => {
    carouselImage();
  }, []);
  return (
    <>
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {el}
    </Swiper>
    </>
  );
};

export default CaroselComponent;
