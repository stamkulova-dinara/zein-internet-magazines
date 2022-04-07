import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import style from "../assets/styles/cardSlider.module.css";
import { FiHeart } from "react-icons/fi";
import { RiHeartFill } from "react-icons/ri";
import { getProduct } from "../container/httpRequest";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import UniCard from './Card'
import Card from "./card/Card";

const Hit = () => {
  const [saleClothes, setSaleClothes] = useState([]);
  const [isFavorites, setIsFavorites] = useState([]);

  const onClickFavouriteTrue = (id) => {
    setIsFavorites([...isFavorites, id]);
  };
  const onClickFavouriteFalse = (id) => {
    setIsFavorites(isFavorites.filter((item) => id !== item));
  };

  const getSaleClothes = async () => {
    const fetchData = await getProduct();
    setSaleClothes(fetchData);
  };

  useEffect(() => {
    getSaleClothes();
  }, []);

  const saleProducts = saleClothes.filter((item) => item.status === "sale");
  return (
    <>
      <div className={style.theme}>
        <h3>Хит продаж</h3>
      </div>
      <div className={style.swiper_wrap}>
        {(saleProducts) ? (
          saleProducts.slice(0, 8).map((item => (
            <Card product={item} key={item.id}/>
        )) : (
          <div>Loading...</div>
        )}
      </div>
      <div className={style.btn}>
        <Link to={"/collections/10"}>
          <Button variant="dark">Ещё</Button>{" "}
        </Link>
      </div>
    </>
  );
};

export default Hit;
