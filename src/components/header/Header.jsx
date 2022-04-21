import React from "react";
import style from "../../assets/styles/header.module.css";
import logotip from "../../assets/icon/zeon-logo.png";
import { Link } from "react-router-dom";
import BasketBtn from "../button/BasketBtn";
import FavoritesBtn from "../button/FavoritesBtn";
import SearchInput from "../search/SearchInput";
import BreadCrp from "../breadcrumb/BreadCrp";
import MobileNavbar from "./MobileNavbar";

const Header = ({ setSearchResult, searchResult, setSearchValue }) => {
  return (
    <header className={style.header}>
      <div className={style.desktop}>
        <div className={style.nav_top}>
          <div className={style.nav_menu}>
            <ul>
              <Link to={"/about"}>
                <li>О нас</li>
              </Link>
              <Link to={"/collections"}>
                <li>Коллекции</li>
              </Link>
              <Link to={"/news"}>
                <li>Новости</li>
              </Link>
            </ul>
          </div>
          <div className={style.header_right}>
            <p className={style.tel}>
              Тел. <a href="tel:+996000000000">+996 000 00 00 00</a>
            </p>
          </div>
        </div>
        <div className={style.nav_bottom}>
          <Link to={"/"}>
            <img src={logotip} alt="" className={style.header_logo} />
          </Link>
          <div className={style.search}>
            <SearchInput
              setSearchResult={setSearchResult}
              searchResult={searchResult}
              setSearchValue={setSearchValue}
            />
          </div>
          <FavoritesBtn />
          <div id={style.ruler}></div>
          <BasketBtn />
        </div>
      </div>
      <div className={style.mobile}>
        <MobileNavbar
          setSearchResult={setSearchResult}
          searchResult={searchResult}
          setSearchValue={setSearchValue}
        />
      </div>
      <BreadCrp />
    </header>
  );
};

export default Header;
