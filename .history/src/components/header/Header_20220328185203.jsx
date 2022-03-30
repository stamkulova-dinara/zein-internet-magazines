import React from 'react'
import style from './header.module.css'
import logotip from '../../assets/icon/zeon-logo.png'
import searchIcon from '../../assets/icon/search.png'
import likeIcon from '../../assets/icon/like.png'
import bag from '../../assets/icon/shopping-bag.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.nav_top}>
        <div className={style.nav_menu}>
           <ul>
             <Link to={'/about'}>
             <li>О нас</li>
             </Link>
              <Link to={'/collections'}>
              <li>Коллекции</li>
              </Link>
              <Link to={'/news'}>
              <li>Новости</li>
              </Link>
            </ul>
        </div>
        <div className={style.header_right}>
            <p className={style.tel}>Тел. <a href="tel:+996000000000" style={{color: 'black'}}>+996 000 00 00 00</a></p>
        </div>
        </div>
        <div className={style.nav_bottom}>
          <Link to={'/'}>
          <img src={logotip} alt="" className={style.header_logo}/>
          </Link>
          <input placeholder='Поиск...' className={style.search}/>
          <img src={searchIcon} className={style.search_icon}/>
          <div className={style.header_rights}>
            <Link></Link>
            <img src={likeIcon} alt="icon" className={style.header_icon} />
            <p>Избранное</p>
          </div>
          <div className={style.header_rights}>
            <img src={bag} alt="icon" className={style.header_icon} />
            <p>Корзина</p>
          </div>
        </div>
    </header>
  )
}

export default Header