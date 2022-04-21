import React, { useEffect, useState } from "react";
import {Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./slider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { getProductById } from "../../container/httpRequest";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [data, setData] = useState({})

  const product = async () => {
    const fetchData = await getProductById(66)
    setData(fetchData)
  }

  useEffect(() => {
    product()
  }, [])

  console.log(data.image)
  return (
    <div>
      <Swiper
        modules={[ Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {data?.image?.map((el, index) => (
          <SwiperSlide key={index}>
            <Link to={`/collections/${data.collectionId}/product/${data.id}`}>
            <img src={el} className={style.slider_image} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
