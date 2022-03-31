import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

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