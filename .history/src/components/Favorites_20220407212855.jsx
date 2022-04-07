import React, { useEffect, useState } from 'react'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem(JSON.parse('favorite'))
   console.log(favorite))
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Favorites