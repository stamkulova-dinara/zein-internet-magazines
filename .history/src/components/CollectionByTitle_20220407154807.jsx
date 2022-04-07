import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { FiHeart } from 'react-icons/fi'
import { RiHeartFill } from 'react-icons/ri'
import style from "../assets/styles/cardSlider.module.css";
import UniCard from './Card'
import Card from './card/Card';

const CollectionByTitle = () => {
    const params = useParams()
    const [collectionByTitle, setCollectionByTitle] = useState([])
  //   const [isFavorites, setIsFavorites] = useState([]);
    const id = params.id
    console.log(id)

  // const onClickFavouriteTrue = (id) => {
  //   setIsFavorites([...isFavorites, id]) 
  //   localStorage.setItem('favorite', id)
  // }
  // const onClickFavouriteFalse = (id) => {
  //   setIsFavorites(isFavorites.filter(item => id!==item)) 
  // }

    const getCollectionById = async () => {
     const fetchData = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/products')
     const jsonData = await fetchData.json();
     setCollectionByTitle(jsonData)
      }
    
    useEffect(() => {
         getCollectionById()
        //  console.log(collectionByTitle, id)
     }, []) 

     const collectioProducts = collectionByTitle.filter(item => item.collectionId === id)
     console.log(collectioProducts);
     
  return (
    <div className={style.content}>
    <div className={style.swiper_wrap}>
      {()collectioProducts.map(el => (
            <Card product={el} key={el.id}/>
      ))}
  </div>
  </div>
  )
}

export default CollectionByTitle