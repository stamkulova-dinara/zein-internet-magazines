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
      {favorites.map(el=>(
        <Car
      ))}
      
    </div>
  )
}

export default Favorites