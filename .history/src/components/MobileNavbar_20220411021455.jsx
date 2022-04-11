import React, { useState } from "react";
import menu from "../assets/icon/menu.png";
import logo from "../assets/icon/zeon-logo.png";
import close from "../assets/icon/close.png";
import style from "../assets/styles/mobileHeader.module.css";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import FavoritesBtn from "./button/FavoritesBtn";
import BasketBtn from "./button/BasketBtn";

const data = [
  {
    title: "О нас",
    path: "/",
    cName: "nav-text",
  },
  {
    title: "Новости",
    path: "/abot",
    cName: "nav-text",
  },
  {
    title: "Коллекция",
    path: "/news",
    cName: "nav-text",
  },
];

const MobileNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className={style.mobile_header}>
        <img src={menu} onClick={showSidebar} />
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <div className={style.menu_head}>
            <h4>Меню</h4>
            <img src={close} className={style.close_img}/>
          </div>
          {data.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span className="span">{item.title}</span>
                </Link>
              </li>
            );
          })}
          <hr style={{width: '105px'}}/>
          <FavoritesBtn/>
          <BasketBtn/>
          <div className={style.bottom_item}>
            Свяжитсь с нами:
            <p className={style.tel}>
            Тел. <a href="tel:+996000000000">+996 000 00 00 00</a>
          </p>
          </div>
        </ul>
      </nav>
      <img src={logo} className={style.mobile_logo} />
      <BiSearch className={style.mobile_search} />
    </div>
  );
};

export default MobileNavbar;
