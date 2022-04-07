import React from 'react'
import { Link } from 'react-router-dom'
import bag from '../../assets/icon/shopping-bag.png'

const BasketBtn = () => {
  return (
    <div style={{marginTop: '28px'}}>
        <Link to={"/basket"}>
          {/* <div> */}
            <img src={bag} alt="icon" />
            Корзина
        </Link>
    </div>
  )
}

export default BasketBtn