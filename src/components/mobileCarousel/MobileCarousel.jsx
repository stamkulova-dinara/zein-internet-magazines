import React from "react";
import { Swiper } from 'swiper/react';
import 'swiper/css';

const MobileCarousel = ({children, className, perView}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={perView}
      className={className}
    >
        {children}
    </Swiper>
  );
};

export default MobileCarousel;
