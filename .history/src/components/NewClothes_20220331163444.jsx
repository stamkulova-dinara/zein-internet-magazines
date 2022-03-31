import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import style from '../assets/styles/cardSlider.module.css'
import UniqueCard from './UniqueCard';

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
    <>
    <div className={style.theme}>
        <h3>Хит продаж</h3>
      </div>
    <div className={style.swiper_wrap}>
      {newClothes.slice(0,9).map(el=>{
        if(el.new === true) {
          return (
            
            <div className={style.swiper_card}>
            {/* <Swiper
            modules={[ Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            className={style.swipers}
            > */}
              {el.image.map(im => (
                // <SwiperSlide>
                // <img src={im} alt="" className={style.swiper_image} />
                // </SwiperSlide>
                <UniqueCard />
              ))}
            {/* </Swiper> */}
            <div className={style.card_info}>
            <p id={style.title}>{el.title}</p>
            <h6>{el.price} p  <span className={style.old_price}>{el.oldPrice} c.</span></h6>
            <p className={style.size}>Размер: {el.size}</p>
            <div className={style.product_color}>
            {el.color.map(e => (
              <div style={{backgroundColor: e, borderRadius: '50%', width: '8px', height: '8px', marginRight: '10px'}} id={style.product_color}></div>
            ))}
            </div>
            </div>
            </div>
            
          )
        }
      })}
      
    </div>
    </>
  )
}

export default NewClothes