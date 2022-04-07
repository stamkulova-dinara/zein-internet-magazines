import React, { useEffect, useState } from 'react'
import Card from './card/Card'
import style from "../assets/styles/cardSlider.module.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   setFavorites(JSON.parse(favorite))
  },[])

  return (
    <div className={style.content}>
      <h3>Избранное</h3>
    <div className={style.swiper_wrap}>
      {favorites?.map(el=>(
        <Card product={el} key={el.id}/>
      ))}
      </div>
    </div>
  )
}

export default Favorites