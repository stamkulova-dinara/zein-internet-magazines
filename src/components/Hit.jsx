import React, { useState, useEffect } from "react";
import style from "../assets/styles/content.module.css";
import { getProduct } from "../container/httpRequest";
import { Button } from "react-bootstrap";
import Card from "./card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
      </Swiper>
      <div className={style.btn}>
        {limit === 8 ? (
          <Button variant="dark" onClick={() => setLimit(limit + 8)}>
            Ещё
          </Button>
        ) : (
          <Button variant="dark" onClick={limCount}>
            Отмена
          </Button>
        )}
      </div>
    </section>
  );
};

export default Hit;
