import React, { useEffect, useState } from 'react'
import style from '../assets/styles/basket.module.css'
import { FaTimes } from 'react-icons/fa'
import ScrollToTop from './FloatingButton/ScrollToTop'
import { SubTotal } from '../utils'

const Basket = () => {
    const [count, setCount] = useState(1)
    const [basketProduct, setBasketProduct] = useState([])

    const removeCountHandler = () => {
        if(count === 1){
          return;  
        }
        setCount(count - 1);
      };
      useEffect(() => {
       const basket = localStorage.getItem('basket')
       setBasketProduct(JSON.parse(basket))
      },[basketProduct])

      function del(product) {
        for(let i = 0; i < basketProduct.length; i++ ) {
          if (basketProduct[i].id == product) {
            basketProduct.splice(i, 1);
            localStorage.setItem("basket", JSON.stringify(basketProduct));
            return;
          }
        }
      }

  return (
    <div className={style.content}>
        <div className={style.products}>
          {basketProduct.map(el=>(
            <div className={style.product} key={el.id}>
            <img src={el.image[0]} className={style.image_product}/>
            <div className={style.product_info}>
                <h6 className={style.product_title}>{el.title}</h6>
                <p className={style.product_color}>Размер: <span>{el.size}</span></p>
                <p className={style.product_color}>Цвет:</p>
                <h6 className={style.product_price}>{el.price} р <span className={style.product_old_price}>{el.oldPrice} р</span></h6>
                <div className={style.count}>
                    <button onClick={removeCountHandler} className={style.product_btn}>-</button>
                    <h5 className={style.product_count}>{count}</h5>
                    <button onClick={() => setCount(count + 1)} className={style.product_btn}>+</button>
                </div>
            </div>
            <FaTimes key={el.id} style={{marginLeft: '350px', cursor: 'pointer'}} onClick={() => del(el.id)}/>
            </div>
            ))}
        </div>
        <div className={style.order_amount}>
            <h6 className={style.order_theme}>Сумма заказа</h6>
            <p className={style.order_product}>Количество линеек: <span className={style.order_length}>{basketProduct.length} шт</span></p>
            <p className={style.order_product}>Количество товаров:<span className={style.order_length}>{SubTotal(basketProduct)}</span></p>
            <p className={style.order_product}>Стоимость:</p>
            <p className={style.order_product}>Скидка:</p>
            <hr/>
            <p className={style.order_product}>Итого к оплате:</p>
            <button className={style.order_btn}>Оформить заказ</button>
        </div>
        <ScrollToTop/>
    </div>
  )
}

export default Basket