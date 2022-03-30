import React from 'react'
import style from '../assets/styles/basket.module.css'

const Basket = () => {
  return (
    <div>
        <div className={style.product}>
            <img src='https://content1.rozetka.com.ua/goods/images/big/185110739.jpg'/>
            <div>
                <h6>Вечернее платье</h6>
                <p>Размер: <span>42-50</span></p>
                <p>Цвет:</p>
                <h5>1 365</h5>
            </div>
        </div>
        <div className={style.order_amount}>

        </div>
    </div>
  )
}

export default Basket