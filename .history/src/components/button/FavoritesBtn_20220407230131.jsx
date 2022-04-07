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
    <div style={{marginTop: '28px'}}>
        <Link to={"/favorites"}>
        {favorites.length == 0 ? (<div className={style.notification}></div>) : null}
            <FiHeart style={{fontSize: '24px', marginRight: '3px'}}/>
            Избранное
        </Link>
    </div>
  )
}

export default FavoritesBtn