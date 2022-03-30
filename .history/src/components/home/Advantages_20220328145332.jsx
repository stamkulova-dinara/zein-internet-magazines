import React from 'react'
import style from './home.module.css'
import advantagesIcon from '../../assets/icon/money.png'

const Advantages = () => {
  return (
    <div>
        <div className={style.theme}>
            <h3>Наши преимущества</h3>
        </div>
        <div >
            <div className={style.advanItem}>
                <img src={advantagesIcon} alt='photo'/>
                
            </div>
            <div>
               
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Advantages