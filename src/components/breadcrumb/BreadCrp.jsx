import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const BreadCrp = () => {
  const location = useLocation();
  
  const breadcrumb = () => {
    switch (location.pathname) {
      case "/about":
        return (
          <div className={style.bread_wrap}>
            <Link to={"/"}>Главная / </Link>
            <span className={style.current_loc}> О нас</span>
          </div>
        );
        break;
      case "/news":
        return (
          <div className={style.bread_wrap}>
            <Link to={"/"}>Главная / </Link>
            <span className={style.current_loc}>Новости</span>
          </div>
        );
        break;
      case "/collections":
        return (
          <div className={style.bread_wrap}>
            <Link to={"/"}>Главная / </Link>
            <span className={style.current_loc}>Коллекции</span>
          </div>
        );
        break;
      case "/search":
        return (
          <div className={style.bread_wrap}>
            <Link to={"/"}>Главная / </Link>
            <span className={style.current_loc}>Результаты поиска</span>
          </div>
        );
        break;
      case "/favorites":
        return (
          <div className={style.bread_wrap}>
            <Link to={"/"}>Главная / </Link>
            <span className={style.current_loc}>Избранное</span>
          </div>
        );
        break;
      case "/basket":
        return (
          <div className={style.bread_wrap}>
            <Link to={"/"}>Главная / </Link>
            <span className={style.current_loc}>Корзина</span>
          </div>
        );
        break;
      case "/offer":
        return (
          <div className={style.bread_wrap}>
            <Link to={"/"}>Главная / </Link>
            <span className={style.current_loc}>Публичная оферта</span>
          </div>
        );
        break;
      case "/help":
        return (
          <div className={style.bread_wrap}>
            <Link to={"/"}>Главная / </Link>
            <span className={style.current_loc}>Помощь</span>
          </div>
        );
        break;
      default:
        return null;
    }
  };

  return breadcrumb();
};

export default BreadCrp;
