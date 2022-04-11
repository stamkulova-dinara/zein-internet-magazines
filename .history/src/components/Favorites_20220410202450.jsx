import React, { useEffect, useState } from 'react'
import Card from './card/Card'
import style from "../assets/styles/content.module.css";
import FloatingBtn from './FloatingButton/FloatingBtn';
import ScrollToTop from './FloatingButton/ScrollToTop';
import RandomProducts from './RandomProducts';

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   setFavorites(JSON.parse(favorite))
  },[])

  return (
    <div className={style.content}>
      <h2>Избранное</h2>
      {favorites.length !== 0 ? (

      )}
      <RandomProducts/>
      <ScrollToTop/>
      <FloatingBtn/>
    </div>
  )
}

export default Favorites