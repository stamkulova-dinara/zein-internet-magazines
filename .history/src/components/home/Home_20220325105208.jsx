import React, { useState } from 'react'
import style from './home.module.css'
import CaroselComponent from './Carosel';

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
      <div>
        <h3>Хит продаж</h3>
      </div>
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