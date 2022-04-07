import React, { useEffect, useState } from 'react'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem(JSON.parse('favorite'))
   (favorite)
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Favorites