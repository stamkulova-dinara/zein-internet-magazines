import React, { useState } from 'react'
import menu from '../assets/icon/menu.png'
import logo from '../assets/icon/zeon-logo.png'
import close from '../assets/icon/close.png'
import style from '../assets/styles/mobileHeader.module.css'
import { FiHeart } from 'react-icons/fi'

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={style.mobile_header}>
      {ope}
        <img src={menu} className={style.mobile_menu}/>
        <img src={logo}  className={style.mobile_logo}/>
        <FiHeart className={style.mobile_search}/>
    </div>
  )
}

export default MobileNavbar