import React, {useState, useEffect} from 'react'
import { getCarouselImage } from '../container/httpRequest'

const CaroselComponent = () => {

  const carouselImage = async() => {
    const data = await getCarouselImage()
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