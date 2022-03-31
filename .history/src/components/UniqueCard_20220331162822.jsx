import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const UniqueCard = () => {
  return (
    <div>
        <Swiper>
            <SwiperSlide>
                <img src={src}/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default UniqueCard