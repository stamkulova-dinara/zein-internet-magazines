import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import style from '../'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CaroselComponent = () => {
  const [data, setData] = useState({});

  const carouselImage = async () => {
    const data = await fetch(
      "https://623c10012e056d1037f94796.mockapi.io/api/v1/collection/11"
    );
    const json = await data.json();
    setData(json);
  };
  console.log(data);

  useEffect(() => {
    carouselImage();
  }, []);
  return (
    <>
     <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      key={data.id}
    >
      {data.image.map(el=> (
         <SwiperSlide>
           <img src={el}/>
         </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default CaroselComponent;
