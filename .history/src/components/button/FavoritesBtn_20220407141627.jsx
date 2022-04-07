import React from 'react'

const FavoritesBtn = () => {
  return (
    <div>
        <Link to={"/favorites"}>
          <div>
            <FiHeart className={style.react_icon} />
            <p>Избранное</p>
          </div>
        </Link>
    </div>
  )
}

export default FavoritesBtn