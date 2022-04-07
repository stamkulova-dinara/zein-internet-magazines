import React, { useEffect } from 'react'

const Favorites = () => {

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   console.log(JSON.pa(favorite))
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Favorites