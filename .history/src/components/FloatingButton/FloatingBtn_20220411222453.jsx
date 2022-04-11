import React, { useState } from 'react'
import chatIcon from '../../assets/icon/Chat.png'
import style from '../../assets/styles/floatingBtn.module.css'
import close from '../../assets/icon/close.png'
import telegram2 from '../../assets/icon/telegram2.png'
import whatsapp2 from '../../assets/icon/whatsapp2.png'
import BackCall from '../../container/BackCall'

const FloatingBtn = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className={style.floating_btn}>
      {open ? (
        <div className={style.open}>
        <div>
          <a href='https://t.me/Zeonitcommunity' target='_blank'>
        <img src={telegram2} className={style.icons}/>
        </a>
        <a href='https://wa.me/+996999805099' target='_blank'> 
        <img src={whatsapp2} className={style.icons}/>
        </a>
        <BackCall/>
        <img src={close} onClick={handleOpen} className={style.close_icon}/>
    </div>
    </div>
      ) : null}
            <img src={chatIcon} className={style.chat} onClick={handleOpen}/>
    </div>
  )
}

export default FloatingBtn