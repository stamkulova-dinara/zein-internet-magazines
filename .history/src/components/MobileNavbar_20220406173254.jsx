import React from 'react'
import menu from '../assets/icon/menu.png'
import logo from '../assets/icon/zeon-logo.png'
import style from '../assets/styles/mobileHeader.module.css'

const MobileNavbar = () => {
  return (
    <div className={style.mobile_header}>
        <img src={menu} className={style.mobile_menu}/>
        <img src={logo}  className={style.mobile_logo}/>
        <img src={search}  className={style.mobile_search}/>
    </div>
  )
}

export default MobileNavbar