import React, { useEffect, useState } from 'react'
import Card from './card/Card'
import style from "../assets/styles/content.module.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   setFavorites(JSON.parse(favorite))
  },[])

  return (
    <div className={style.content}>
      <h2>Избранное</h2>
      <p>Товаров в избранном: {favorites.length}</p>
    <div className={style.swiper_wrap}>
      {favorites?.map(el=>(
        <Card product={el} key={el.id}/>
      ))}
      </div>
    </div>
  )
}

export default Favorites