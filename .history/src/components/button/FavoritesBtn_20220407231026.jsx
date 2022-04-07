import React, { useState, useEffect } from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from "react-router-dom";
import style from '../../assets/styles/button.module.css'

const FavoritesBtn = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   setFavorites(JSON.parse(favorite))
  },[])
  return (
    <div className={style.na}>
        <Link to={"/favorites"}>
        {favorites.length !== 0 ? (<div className={style.notification}></div>) : null}
            <FiHeart className={style.icon}/>
            Избранное
        </Link>
    </div>
  )
}

export default FavoritesBtn