import React, { useEffect } from 'react'

const Favorites = () => {
  useEffect(() => {
   const favorite localStorage.getItem(JSON.parse('favorite'))
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Favorites