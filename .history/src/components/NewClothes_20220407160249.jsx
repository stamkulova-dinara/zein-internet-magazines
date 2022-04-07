import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import style from "../assets/styles/cardSlider.module.css";
import { FiHeart } from 'react-icons/fi'
import { RiHeartFill } from 'react-icons/ri'
import { getProduct } from "../container/httpRequest";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import UniCard from './Card'

const NewClothes = () => {
  const [newClothes, setNewClothes] = useState([]);
  const [isFavorites, setIsFavorites] = useState([]);

  const onClickFavouriteTrue = (id) => {
    setIsFavorites([...isFavorites, id])   
  }
  const onClickFavouriteFalse = (id) => {
    setIsFavorites(isFavorites.filter(item => id!==item)) 
  }

  const getNewClothes = async () => {
    const FetchData = await getProduct()
    setNewClothes(FetchData);
  };

  useEffect(() => {
    getNewClothes();
  }, []);

  const newProducts = newClothes.filter(item => item.status === 'new')
  return (
    <>
    <div className={style.theme}>
        <h3>Новинки</h3>
      </div>
      <div className={style.swiper_wrap}>
        {newProducts.slice(0, 8).map((el) => (
              
            )
        )}
      </div>
      <div className={style.btn}>
      <Button variant="dark">Ещё</Button>{' '}
    </div>
    </>
  );
};

export default NewClothes;
