import React from 'react'
import style from './header.module.css'
import logotip from '../../assets/icon/zeon-logo.png'
import searchIcon from '../../assets/icon/search.png'
import likeIcon from '../../assets/icon/like.png'
import bag from '../../assets/icon/shopping'
import { BsBag } from 'react-icons/bs'
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
            <p className={style.tel}>Тел. <span className={style.telephone_number}>+996 000 00 00 00</span></p>
        </div>
        </div>
        <div className={style.nav_bottom}>
          <Link to={'/'}>
          <img src={logotip} alt="" className={style.header_logo}/>
          </Link>
          <input placeholder='Поиск...' className={style.search}/>
          <img src={searchIcon} className={style.search_icon}/>
          <div className={style.header_rights}>
            <img src={likeIcon} alt="icon" className={style.like_icon} />
            <p>Избранное</p>
          </div>
          <div className={style.header_rights}>
            <BsBag className={style.icon}/>
            <p>Корзина</p>
          </div>
        </div>
    </header>
  )
}

export default Header