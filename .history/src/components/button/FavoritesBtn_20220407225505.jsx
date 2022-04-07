import React, { useState, useEffect } from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from "react-router-dom";
import style from '../../assets/s'

const FavoritesBtn = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   setFavorites(JSON.parse(favorite))
  },[])
  return (
    <div style={{marginTop: '28px'}}>
        <Link to={"/favorites"}>
        {favorites ? (<div className={style.length}>{favorites.length}</div>) : null}
            <FiHeart style={{fontSize: '22px', marginRight: '3px'}}/>
            Избранное
        </Link>
    </div>
  )
}

export default FavoritesBtn