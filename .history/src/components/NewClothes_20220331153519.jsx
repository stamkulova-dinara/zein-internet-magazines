import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import style from '../assets/styles/cardSlider.module.css'

const NewClothes = () => {
  const [newClothes, setNewClothes] = useState([])

  const getNewClothes = async () => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection')
    const jsonData = await data.json() 
    setNewClothes(jsonData)
  }

  useEffect(() => {
    getNewClothes()
  }, [])
  return (
    <div className={style.swiper_wrap}>
      {newClothes.slice(0,9).map(el=>{
        if(el.new === true) {
          return (
            <div>
            <div className={style.swiper_card}>
            <Swiper
            modules={[ Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // autoplay={true}
            scrollbar={{ draggable: true }}
            className={style.swipers}
            >
              {el.image.map(im => (
                <SwiperSlide>
                <img src={im} alt="" className={style.swiper_image} />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            </div>
          )
        }
      })}
      
    </div>
  )
}

export default NewClothes