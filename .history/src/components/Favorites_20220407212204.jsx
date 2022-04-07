import React, { useEffect } from 'react'

const Favorites = () => {
  useEffect(() => {
    localStorage.getItem(JSON.parse('favorite'))
  },)

  return (
    <div>
      
    </div>
  )
}

export default Favorites