import React, {useState, useEffect} from 'react'
import { getCarouselImage } from '../container/httpRequest'

const CaroselComponent = () => {

  const carouselImage = async() => {
    const data = await FET()
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