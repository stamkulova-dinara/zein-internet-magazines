import React, { useEffect } from 'react'

const Favorites = () => {
  const [favorites, setFavorites] = useSta

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   console.log(JSON.parse(favorite))
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Favorites