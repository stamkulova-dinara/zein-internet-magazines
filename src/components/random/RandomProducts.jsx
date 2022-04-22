import React, { useEffect, useState } from "react";
import { getProduct } from "../../container/httpRequest";
import Similar from "../card/Similar";
import style from "../../assets/styles/content.module.css";
import MobileCarousel from "../mobileCarousel/MobileCarousel";
import { SwiperSlide } from "swiper/react";

const RandomProducts = () => {
  const [products, setProducts] = useState([]);

  const Products = async () => {
    const data = await getProduct();
    setProducts(data);
  };

  useEffect(() => {
    Products();
  }, []);

  return (
    <div className={style.box}>
      <h4>Возможно Вас заинтересует</h4>
      <div className={style.swiper_wrap}>
        {products.slice(0, 5).map((el, ind) => (
          <Similar product={el} key={ind} />
        ))}
      </div>
      <MobileCarousel className={style.mobile_swiper} perView={1.5}>
        {products.slice(0, 5).map((el, ind) => (
          <SwiperSlide className={style.mobile_slider}>
            <Similar product={el} key={ind} />
          </SwiperSlide>
        ))}
      </MobileCarousel>
    </div>
  );
};

export default RandomProducts;
