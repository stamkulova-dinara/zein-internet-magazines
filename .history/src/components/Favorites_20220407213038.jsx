import React, { useEffect, useState } from 'react'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem(JSON.parse('favorite'))
   setFavorites(favorite)
  },[])
  // console.log(favorites)

  return (
    <div>
      {favorites.mm}
      
    </div>
  )
}

export default Favorites