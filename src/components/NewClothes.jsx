import React, { useEffect, useState } from "react";
import style from "../assets/styles/content.module.css";
import { getProduct } from "../container/httpRequest";
import Card from "./card/Card";
import {SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MobileCarousel from './mobileCarousel/MobileCarousel'

const NewClothes = () => {
  const [newClothes, setNewClothes] = useState([]);
  const [limit, setLimit] = useState(8)

  const getNewClothes = async () => {
    const FetchData = await getProduct();
    setNewClothes(FetchData);
  };

  useEffect(() => {
    getNewClothes();
  }, []);

  const newProducts = newClothes.filter((item) => item.status === "new");
  return (
    <>
      <div className={style.theme}>
        <h3>Новинки</h3>
      </div>
      <div className={style.swiper_wrap}>
        {newProducts ? (
          newProducts.slice(0, limit).map((el) => <Card product={el} key={el.id} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <MobileCarousel className={style.mobile_swiper}>
      {newProducts ? (
          newProducts
            .slice(0, limit)
            .map((item) => (
      <SwiperSlide className={style.mobile_slider}>
      <Card product={item} key={item.id} />
       </SwiperSlide>
        ))) : (
          <div>Loading...</div>
            )}
    </MobileCarousel>
      <div className={style.btn}>
      <button id={style.more_btn} onClick={() => setLimit(limit + 8)}>
            Ещё
          </button>
      </div>
    </>
  );
};

export default NewClothes;
