import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from "react-router-dom";

const FavoritesBtn = () => {
  return (
    <div style={{marginTop: '28px'}}>
        <Link to={"/favorites"}>
            <FiHeart style={{fontSize: '22px', marginRight: '2px'}}/>
            Избранное
        </Link>
    </div>
  )
}

export default FavoritesBtn