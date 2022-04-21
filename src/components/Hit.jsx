import React, { useState, useEffect } from "react";
import style from "../assets/styles/content.module.css";
import { getProduct } from "../container/httpRequest";
import Card from "./card/Card";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import MobileCarousel from './mobileCarousel/MobileCarousel'

const Hit = () => {
  const [saleClothes, setSaleClothes] = useState([]);
  const [limit, setLimit] = useState(8);

  const getSaleClothes = async () => {
    const fetchData = await getProduct();
    setSaleClothes(fetchData);
  };

  useEffect(() => {
    getSaleClothes();
  }, [limit]);

  const limCount = () => {
    setLimit(limit - 8);
  };

  const saleProducts = saleClothes.filter((item) => item.status === "sale");
  return (
    <section>
      <div className={style.theme}>
        <h3>Хит продаж</h3>
      </div>
      <div className={style.swiper_wrap}>
        {saleProducts ? (
          saleProducts
            .slice(0, limit)
            .map((item, index) => <Card product={item} key={index} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <MobileCarousel
        className={style.mobile_swiper}
      >
        {saleProducts ? (
          saleProducts.slice(0, limit).map((item, index) => (
            <SwiperSlide className={style.mobile_slider}>
              <Card product={item} key={index} />
            </SwiperSlide>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </MobileCarousel>
      <div className={style.btn}>
          <button id={style.more_btn} onClick={() => setLimit(limit + 8)}>
            Ещё
          </button>
      </div>
    </section>
  );
};

export default Hit;
