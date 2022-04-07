import React, { useEffect } from 'react'

const Favorites = () => {

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   console.log(<JSON className="p"></JSON>(favorite))
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Favorites