import React from 'react'
import { FiHeart } from 'react-icons/fi'

const FavoritesBtn = () => {
  return (
    <div>
        <Link to={"/favorites"}>
          <div>
            <FiHeart />
            Избранное
          </div>
        </Link>
    </div>
  )
}

export default FavoritesBtn