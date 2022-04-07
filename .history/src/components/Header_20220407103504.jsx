import React, { useState } from "react";
import style from "../assets/styles/header.module.css";
import logotip from "../assets/icon/zeon-logo.png";
import bag from "../assets/icon/shopping-bag.png";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'

const Header = ({setSearchResult, searchResult}) => {
  const [inputValue, setInputValue] = useState("");

  const searching = async () => {
    const fetchData = await fetch(
      `https://623c10012e056d1037f94796.mockapi.io/api/v1/products?search=${inputValue}`
    );
    const JsonData = await fetchData.json();
      setSearchResult(JsonData)
      console.log('head', searchResult)
  };

  return (
    <header className={style.header}>
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
        <input
          placeholder="Поиск..."
          className={style.search}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div onClick={searching} id={style.search_btn}>
          <Link to={"/search"}>
            <BiSearch className={style.search_icon}/>
          </Link>
        </div>
        <ul>
          {searchResult.map(el=>(
            <li>{el.title]</li>
          ))}
        </ul>
        <Link to={"/favorites"}>
          <div className={style.header_rights}>
            <FiHeart className={style.react_icon} />
            <p>Избранное</p>
          </div>
        </Link>
        <Link to={"/basket"}>
          <div className={style.header_rights}>
            <img src={bag} alt="icon" className={style.header_icon} />
            <p>Корзина</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;