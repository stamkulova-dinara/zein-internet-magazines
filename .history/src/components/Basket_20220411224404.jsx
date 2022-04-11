import React, { useEffect, useState } from 'react'
import style from '../assets/styles/basket.module.css'
import { FaTimes } from 'react-icons/fa'
import ScrollToTop from './FloatingButton/ScrollToTop'
import { SubTotal } from '../utils'
import BasketCard from './card/BasketCard'

const Basket = () => {
    const [count, setCount] = useState(1)
    const [basketProduct, setBasketProduct] = useState([])

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
            <BasketCard product={el}/>
            ))}
        </div>
        <div className={style.order_amount}>
            <h6 className={style.order_theme}>Сумма заказа</h6>
            <p className={style.order_product}>Количество линеек: <span className={style.order_length}>{basketProduct.length} шт</span></p>
            <p className={style.order_product}>Количество товаров:<span className={style.order_length}>{count}шт</span></p>
            <p className={style.order_product}>Стоимость:<span className={style.order_length}> {<SubTotal products={basketProduct}/>}рублей</span></p>
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