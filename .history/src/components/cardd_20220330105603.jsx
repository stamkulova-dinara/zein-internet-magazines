import React from 'react' 
import style from '../'

const Cards = () => {
  return (
    <div>
        <div className={style.card}>
    <div className={style.triangle_wrapper}>
      <div className={style.triangle}>
        <span className={style.triangle_text}>cuteness<br/> alert!</span>
      </div>
    </div>
    <img src="https://placeimg.com/300/400/animals"/>
  </div>
    </div>
  )
}

export default Cards