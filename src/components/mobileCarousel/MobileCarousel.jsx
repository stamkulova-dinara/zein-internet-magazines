import React from "react";
import { Swiper } from 'swiper/react';
import 'swiper/css';

const MobileCarousel = ({children, className}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    //   className={style.mobile_swiper}
    className={className}
    >
        {children}
    </Swiper>
  );
};

export default MobileCarousel;
