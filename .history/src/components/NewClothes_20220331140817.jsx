import React, { useEffect } from 'react'

const NewClothes = () => {
  const getNewClothes = async () => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection')
    const jsonData = await data.json() 
    console.log(jsonData)
  }

  useEffect(() => {
    getNewClothes()
  })
  return (
    <div>

    </div>
  )
}

export default NewClothe