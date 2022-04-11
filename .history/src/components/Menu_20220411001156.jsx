import React from 'react'

const Menu = ({open}) => {
  return (
    <div className={style.menu}>
        <div className={style.menu_head}>
          <h6>Меню</h6>
          <img src={close} onClick={click}/>
        </div>

      </div>
  )
}

export default Menu