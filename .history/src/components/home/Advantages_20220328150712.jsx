import React from 'react'
import style from './advantages.module.css'
import advantagesIcon from '../../assets/icon/money.png'
import TruckIcon from '../../assets/icon/truck.png'
import ShopIcon from '../../assets/icon/shop.png'
import advantagesIcon2 from '../../assets/icon/advantages.png'

const Advantages = () => {
  return (
    <div>
        <div className={style.theme}>
            <h3>Наши преимущества</h3>
        </div>
        <div className={style.advantages}>
            <div className={style.advanItem}>
                <img src={advantagesIcon} alt='photo'/>
                <h6>Удобные способы оплаты</h6>
                <p>Мы предлагаем возможность безналичной оплаты</p>
            </div>
            <div className={style.advanItem}>
              <img src={TruckIcon} alt='photo'/>
              <h6>Cвоевремнная доставка</h6>
                <p>100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.</p>
            </div>
            <div className={style.advanItem}>
              <img src={advantagesIcon2} alt='photo'/>
              <h6>Профессиональная консультация</h6>
                <p>Мы проконсультируем 
                  и индивидуально подойдем
                  к Вашему заказу </p>
            </div>
            <div>
              <img src={ShopIcon} alt='photo'/>
              <h6>Акции и бонусы для покупателей</h6>
                <p>Промокоды со скидками для постоянных клиентов, акции 
на новые позиции</p>
            </div>
        </div>
    </div>
  )
}

export default Advantages