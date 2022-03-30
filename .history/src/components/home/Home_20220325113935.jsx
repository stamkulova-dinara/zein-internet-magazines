import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import CaroselComponent from './Carosel';

const Home = () => {
  const [dress, setDress] = useState([])

  useEffect(() => {
    fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/new')
    .then(res=>res.json())
    .then(json=>setDress(json))
  }, [])
  console.log(dress)
  return (
    <div className={style.content}>
      <CaroselComponent/>
    <div>
      <div className={style.theme}>
        <h3>Хит продаж</h3>
      </div>
    <div className={style.card}>
      {dress.map((el) => {
        return (
          <div className={style.cardItem}>
            <img src={el.image} className={style.photo}/>
            <p>{el.title}</p>
            {el.color.map(color => (
              <span style={{backgroundColor: color}} className={style.product_color}></span>
            ))}
          </div>
        )
      })}
    </div>

    </div>
    </div>
  )
}

export default Home