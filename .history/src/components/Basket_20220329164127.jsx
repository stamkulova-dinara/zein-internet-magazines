import React, { useState } from 'react'
import style from '../assets/styles/basket.module.css'
import { FaTimes } from 'react-icons/fa'

const Basket = () => {
    const [count, setCount] = useState(1)

    const removeCountHandler = () => {
        if(count === 1){
          return;  
        }
        setCount(count - 1);
      };
  return (
    <div className={style.content}>
        <div className={style.products}>
            <div className={style.product}>
            <img src='https://content1.rozetka.com.ua/goods/images/big/185110739.jpg' className={style.image_product}/>
            <div className={style.product_info}>
                <h6 className={style.product_title}>Вечернее платье</h6>
                <p className={style.product_color}>Размер: <span>42-50</span></p>
                <p className={style.product_color}>Цвет:</p>
                <h6 className={style.product_price}>1 365 р <span className={style.product_old_price}>1 200 р</span></h6>
                <div className={style.count}>
                    <button onClick={removeCountHandler} className={style.product_btn}>-</button>
                    <h5 className={style.product_count}>{count}</h5>
                    <button onClick={() => setCount(count + 1)} className={style.product_btn}>+</button>
                </div>
            </div>
            </div>
            <FaTimes style={{alignItems: 'flex-end'}}/>
        </div>
        <div className={style.order_amount}>
            <h6>Сумма заказа</h6>
            <p className={style.order_product}>Количество линеек:</p>
            <p className={style.order_product}>Количество товаров:</p>
            <p className={style.order_product}>Стоимость:</p>
            <p>Скидка:</p>
            <hr/>
            <p>Итого к оплате:</p>
        </div>
    </div>
  )
}

export default Basket