import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from "react-router-dom";

const FavoritesBtn = () => {
  return (
    <div>
        <Link to={"/favorites"}>
          <div>
            <FiHeart style={{fontS}}/>
            Избранное
          </div>
        </Link>
    </div>
  )
}

export default FavoritesBtn