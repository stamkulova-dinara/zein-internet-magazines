import React from "react";
import Header from "./Header";
import MobileNavbar from "./MobileNavbar";
import style from '../assets/styles/mobileHeader.module.css'

const Navbar = (Х) => {
  return (
    <>
      <div className={style.mobile}>
        <MobileNavbar />
      </div>
      <div className={style.desktop}>
        <Header/>
      </div>
    </>
  );
};

export default Navbar;
