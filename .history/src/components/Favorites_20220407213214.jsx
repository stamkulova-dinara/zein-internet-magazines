import React, { useEffect, useState } from 'react'
import Card from './card/Card'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem(JS'favorite'))
   setFavorites(favorite)
  },[])
  // console.log(favorites)

  return (
    <div>
      {favorites.map(el=>(
        <Card product={el} key={el.id}/>
      ))}
      
    </div>
  )
}

export default Favorites