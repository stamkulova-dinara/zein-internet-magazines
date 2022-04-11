import React, { useState } from 'react'
import menu from '../assets/icon/menu.png'
import logo from '../assets/icon/zeon-logo.png'
import close from '../assets/icon/close.png'
import style from '../assets/styles/mobileHeader.module.css'
import { BiSearch } from 'react-icons/bi'

const MobileNavbar = () => {
const [open, setOpen] = useState(false)

cis
  return (
    <div className={style.mobile_header}>
      <img src={menu} className={style.mobile_menu}/> 
      {open ? <div>eloo</div> : null}
        <img src={logo}  className={style.mobile_logo}/>
        <BiSearch className={style.mobile_search}/>
    </div>

    
  )
}

export default MobileNavbar