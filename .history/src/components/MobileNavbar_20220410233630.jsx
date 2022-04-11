import React, { useState } from 'react'
import menu from '../assets/icon/menu.png'
import logo from '../assets/icon/zeon-logo.png'
import close from '../assets/icon/close.png'
import style from '../assets/styles/mobileHeader.module.css'
import { FiHeart } from 'react-icons/fi'

const MobileNavbar = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <img src="/codeloper1.png" alt="logo" className={classes.img} />
          <div onClick={() => setActive(!active)}>
            <div
              className={active ? classes.activeHamburger : classes.hamburber}
            />
          </div>
        </div>
      </div>
      <div className={active ? classes.activeSidenav : classes.sidenav}>
        <ul className={classes.ul}>
          {data.map((item, i) => (
            <li key={i}>
              <a href="#" className={classes.a}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar