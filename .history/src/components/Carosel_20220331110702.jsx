import React, {useState, useEffect} from 'react'
import { getCarouselImage } from '../container/httpRequest'

const CaroselComponent = () => {

  const carouselImage = async() => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection/11')
    const json = await data.json()
    console.log('hello', json)
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