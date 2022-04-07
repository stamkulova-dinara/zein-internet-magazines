import React, { useState } from "react";
import style from "../assets/styles/header.module.css";
import logotip from "../assets/icon/zeon-logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import BasketBtn from "./button/BasketBtn";
import FavoritesBtn from "./button/FavoritesBtn";
import SearchInput from "./search/SearchInput";

const Header = ({setSearchResult, searchResult, setSearchValue, searchValue}) => {
  // const [inputValue, setInputValue] = useState("");

  // const searching = async () => {
  //   const fetchData = await fetch(
  //     `https://623c10012e056d1037f94796.mockapi.io/api/v1/products?search=${inputValue}`
  //   );
  //   const JsonData = await fetchData.json();
  //     setSearchResult(JsonData)
  //     console.log('head', searchResult)
  // };

  // const handleChange = async (e) => {
  //   setInputValue(e.target.value)
  //   const fetchData = await fetch(
  //     `https://623c10012e056d1037f94796.mockapi.io/api/v1/products?title=${inputValue}`
  //   );
  //   const JsonData = await fetchData.json();
  //     setSearchResult(JsonData)
  //     setSearchValue(inputValue)
  //     console.log('head', searchResult)
  // }

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
        <SearchInput setSearchResult={setSearchResult} searchResult={searchResult} setSearchValue={setSearchValue} searchValue/>
        {/* <input
          placeholder="Поиск..."
          className={style.search}
          value={inputValue}
          onChange={handleChange}
          // onClick={searching}
        />
        <div id={style.search_btn}>
          <Link to={"/search"}>
            <BiSearch className={style.search_icon}/>
          </Link>
        </div> */}
        <FavoritesBtn/>
        <BasketBtn/>
      </div>
    </header>
  );
};

export default Header;