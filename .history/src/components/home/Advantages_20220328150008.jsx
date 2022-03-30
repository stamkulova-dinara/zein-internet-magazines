import React from 'react'
import style from './advantages.module.css'
import advantagesIcon from '../../assets/icon/money.png'
import TruckIcon from '../../assets/icon/truck.png'
import ShopIcon from '../../assets/icon/shop.png'
import advantagesIcon from '../../assets/icon/money.png'

const Advantages = () => {
  return (
    <div>
        <div className={style.theme}>
            <h3>Наши преимущества</h3>
        </div>
        <div className={style.advantages}>
            <div className={style.advanItem}>
                <img src={advantagesIcon} alt='photo'/>
                
            </div>
            <div>
              <img src={TruckIcon} alt='photo'/>
            </div>
            <div>
              <img src={hopIcon} alt='photo'/>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Advantages