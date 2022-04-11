import React from "react";
import Header from "./Header";
import MobileNavbar from "./header/MobileNavbar";
import style from '../assets/styles/mobileHeader.module.css'

const Navbar = ({setSearchResult, searchResult, setSearchValue, searchValue}) => {
  return (
    <>
      <div className={style.mobile}>
        <MobileNavbar />
      </div>
      <div className={style.desktop}>
        <Header setSearchResult={setSearchResult} searchResult={searchResult} setSearchValue={setSearchValue}/>
      </div>
    </>
  );
};

export default Navbar;
