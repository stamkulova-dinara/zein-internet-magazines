import React, { useState} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { FiHeart } from 'react-icons/fi'
import { RiHeartFill } from 'react-icons/ri'
import style from "../assets/styles/cardSlider.module.css";
import Card from './card/Card';
// import UniCard from './Card'

const SearchResult = ({searchResult, searchValue}) => {
  const [isFavorites, setIsFavorites] = useState([]);
  const [LocalStorage, setLocalStorage] = useState(1)

const onClickFavouriteTrue = (id) => {
  setIsFavorites([...isFavorites, id])  
  // localStorage.setItem('favorites', id) 
}
const onClickFavouriteFalse = (id) => {
  setIsFavorites(isFavorites.filter(item => id!==item)) 
  // localStorage.removeItem('favorites')
}
  console.log(searchResult)
  console.log(searchValue);
  return (
    <div className={style.content}>
    <div className={style.swiper_wrap}>
      {(searchResult.length !== 0) ? searchResult.map(el => (
        <Card product={
          
        }/>
      )) : <h1>Ничего не найдено</h1>}
  </div>
</div>
  )
}

export default SearchResult