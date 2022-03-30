import React, { useState } from 'react'
import style from './home.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import CaroselComponent from './Carosel';

// const data = [
//   {
//     image: 'https://altermoda.ru/bundles/ostrovweb/images/o-kompanii/main_new_600x1920.jpg'
//   },
//   {
//     image: 'https://www.lovemodestfashion.com/image/cache/catalog/banner-new-1-1920x600.jpg'
//   },
//   {
//     image: 'https://www.lovemodestfashion.com/image/cache/catalog/banner-new-2-1920x600.jpg'
//   }
// ]

const Home = () => {
  const [dress, setDress] = useState([])

  fetch('https://623ae9b8f8827fbe47ab1549.mockapi.io/products')
  .then(res=>res.json())
  .then(json=>setDress(json))
  console.log(dress)
  return (
    <div className={style.content}>
      <CaroselComponent/>
    <div>
    <h3>Хит продаж</h3>
    <div className={style.card}>
      {dress.map((el) => {
        return (
          <div>
            <img src={el.image} className={style.photo}/>
          </div>
        )
      })}
    </div>

    </div>
    </div>
  )
}

export default Home