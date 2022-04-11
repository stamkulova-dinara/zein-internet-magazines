import React from 'react'
import close from '../assets/icon/close.png'
import style from '../assets/styles/mobileHeader.module.css'

const Menu = ({open}) => {
  return (
    <div className={style.menu}>
        <div className={style.menu_head}>
          <h6>Меню</h6>
          <img src={close} onClick={open}/>
        </div>

      </div>
  )
}

export default Menu