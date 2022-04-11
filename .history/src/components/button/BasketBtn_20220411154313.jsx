import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bag from '../../assets/icon/shopping-bag.png'
import style from '../../assets/styles/button.module.css'
import { usePrevious } from './usePrevious'

const BasketBtn = () => {
  const [basketProduct, setBasketProduct] = useState([])
  const use

  useEffect(() => {
    if(isInitialRender) {
      setIsInitialRender(false)
      const basket = JSON.parse(localStorage.getItem('basket'))
      setBasketProduct(basket)
    }
   },[basketProduct, isInitialRender])
  return (
    <div className={style.navItem}>
        <Link to={"/basket"}>
        {basketProduct.length !== 0 ? (<div className={style.notification}></div>) : null}
            <img src={bag} alt="icon" className={style.icon_basket}/>
            Корзина 
        </Link>
    </div>
  )
}

export default BasketBtn