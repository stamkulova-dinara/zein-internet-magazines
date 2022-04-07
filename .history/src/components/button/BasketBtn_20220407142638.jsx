import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import bag from '../../assets/icon/shopping-bag.png'
import { addItem } from '../../store/actions'

const BasketBtn = () => {
    const state = useSelector(addItem)
  return (
    <div style={{marginTop: '28px'}}>
        <Link to={"/basket"}>
            <div style={{color: 'red'}}></div>
            <img src={bag} alt="icon" />
            Корзина
        </Link>
    </div>
  )
}

export default BasketBtn