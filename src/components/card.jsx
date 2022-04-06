import React from 'react'
import style from "../assets/styles/cardSlider.module.css";

const UniCard = ({title, price, oldPrice, size}) => {
  return (
    <div >
             <p id={style.title}>{title}</p>
             <h6>
               {price} p{" "}
               <span className={style.old_price}>
                   {oldPrice} c
                </span>
             </h6>
             <p className={style.size}>Размер: {size}</p>
    </div>
  )
}

export default UniCard