import React from 'react'

const FavoritesBtn = () => {
  return (
    <div>
        <Link to={"/favorites"}>
          <div>
            <FiHeart />
            <p>Избранное</p>
          </div>
        </Link>
    </div>
  )
}

export default FavoritesBtn