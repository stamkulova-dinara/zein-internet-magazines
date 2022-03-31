import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar'

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