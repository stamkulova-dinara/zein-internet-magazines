import React from 'react'
import { Link } from 'react-router-dom'
import ba

const BasketBtn = () => {
  return (
    <div>
        <Link to={"/basket"}>
          <div className={style.header_rights}>
            <img src={bag} alt="icon" className={style.header_icon} />
            Корзина
          </div>
        </Link>
    </div>
  )
}

export default BasketBtn