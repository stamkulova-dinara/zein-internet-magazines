import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const CaroselComponent = () => {
  const [state, setState] = useState([])

  const carouselImage = async () => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection/11')
    const json = await data.json()
    setState(json)
    console.log(state)
  }

  useEffect(() => {
    carouselImage()
  }, [])
  return (
    <>
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
    {state.image.map((el) => (
      <SwiperSlide>
      <img src={el}/>
      </SwiperSlide>
    ))}
    </Swiper>
    </>
  )
}

export default CaroselComponent