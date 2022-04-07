import React, { useEffect } from 'react'

const Favorites = () => {

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   console.log(JSON.favorite)
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Favorites