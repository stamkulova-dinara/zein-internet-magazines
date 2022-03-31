import React, {useState, useEffect} from 'react'

const CaroselComponent = () => {
  const [state, setState]

  const carouselImage = async() => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection/11')
    const json = await data.json()
    console.log(json)
  }

  useEffect(() => {
    carouselImage()
  }, [])
  return (
    <>

    </>
  )
}

export default CaroselComponent