import React from 'react'
import chatIcon from '../assets/icon/Chat.png'
import style from '../assets/styles/floatingBtn.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md'

const FloatingBtn = () => {
  return (
    <div className={style.floating_btn}>
        <MdKeyboardArrowUp className={style.top_arrow}/>
        <div>
            <img src={chatIcon} className={style.chat} />
        </div>
    </div>
  )
}

export default FloatingBtn