import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const UniqueCard = ({src}) => {
  return (
    <div>
        <Swiper>
            <SwiperSlide
            modules={[ Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            className={style.swipers}
            >
                <img src={src}/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default UniqueCard