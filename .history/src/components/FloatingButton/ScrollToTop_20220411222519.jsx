import React from 'react'
import style from './floatingBtn.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md'

const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };
  return (
    <div className={style.scroll}>
        <MdKeyboardArrowUp className={style.top_arrow} onClick={scrollToTop}/>
    </div>
  )
}

export default ScrollToTop