import React, { useEffect } from 'react'

const Favorites = () => {
  useEffect(() => {
    localStorage.getItem(JSON.parse('favor'))
  })

  return (
    <div>
      
    </div>
  )
}

export default Favorites