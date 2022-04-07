import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bag from '../../assets/icon/shopping-bag.png'
import style from '../../assets/styles/button.module.css'

const BasketBtn = () => {
  const [basketProduct, setBasketProduct] = useState([])

  useEffect(() => {
    const basket = localStorage.getItem('basket')
    setBasketProduct(JSON.parse(basket))
   },[])
  return (
    <div className={style.navItem}>
        <Link to={"/basket"}>
        {basketProduct.length !== 0 ? (<div className={style.notification}></div>) : null}
            <img src={bag} alt="icon" className={style.icon}/>
            Корзина 
        </Link>
    </div>
  )
}

export default BasketBtn