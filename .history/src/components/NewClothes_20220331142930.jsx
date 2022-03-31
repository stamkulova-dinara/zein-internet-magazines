import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

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
    <div>
      {newClothes.map(el=>{
        if(el.new === true) {
          return (
            <Swiper
            modules={[ Scrollbar, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
              {el.image.map(im => (
                <SwiperSlide>
                <img src={im} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          )
        }
      })}
      
    </div>
  )
}

export default NewClothes