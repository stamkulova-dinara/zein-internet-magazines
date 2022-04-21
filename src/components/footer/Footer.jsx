import React, { useEffect, useState } from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
import instagramIcon from "../../assets/icon/instagram.png";
import telegramIcon from "../../assets/icon/telegram.png";
import whatsappIcon from "../../assets/icon/whatsapp.png";
import phoneIcon from "../../assets/icon/phone.png";
import emailIcon from "../../assets/icon/email.png";
import { getInfo } from "../../container/httpRequest";

const Footer = () => {
  const [data, setData] = useState({});

  const getFooterInfo = async () => {
    const fetchData = await getInfo();
    setData(fetchData[0].info);
  };

  useEffect(() => {
    getFooterInfo();
  }, []);
  return (
    <footer className={style.footer}>
      <div className={style.footer_main}>
        <div>
          <Link to={"/"}>
            <img src={data.logo2} className={style.footer_logo} />
          </Link>
          <p className={style.footer_madeIn}>Developed by Zeon 2022</p>
        </div>
        <div className={style.box}>
          <h5>Компания</h5>
          <ul className={style.ul}>
            <Link to={"/about"}>
              <li>О нас</li>
            </Link>
            <Link to={"/news"}>
              <li>Новости</li>
            </Link>
            <Link to={"/help"}>
              <li>Помощь</li>
            </Link>
            <Link to={"/offer"}>
              <li className={style.only_view_mob}>Публичная оферта</li>
            </Link>
          </ul>
        </div>
        <div className={style.box}>
          <h5>Контакты</h5>
          <ul>
            <li>
              <a href="tel:+996500123456" style={{ color: "white" }}>
                <img src={phoneIcon} className={style.icon_footer} />
                {data.phone2}
              </a>
            </li>
            <li>
              <a href="tel:+996500123456" style={{ color: "white" }}>
                <img src={phoneIcon} className={style.icon_footer} />
                {data.phone2}
              </a>
            </li>
            <li className={style.only_view_mob}>
              <a href="tel:+996500123456" style={{ color: "white" }}>
                <img src={phoneIcon} className={style.icon_footer} />
                {data.phone2}
              </a>
            </li>

            <li>
              <a href="mailto:zeonithub@gmail.com" style={{ color: "white" }}>
                <img src={emailIcon} className={style.icon_footer} />
                {data.mail}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Мы в социальных сетях:</h5>
          <ul>
            <a href={data.instagram} target="_blank">
              <li>
                <img src={instagramIcon} className={style.icon_footer} />
                Instagram
              </li>
            </a>
            <a href={data.telegram} target="_blank">
              <li className={style.mobile_none}>
                <img src={telegramIcon} className={style.icon_footer} />
                Telegram
              </li>
            </a>
            <a href={data.whatsapp} target="_blank">
              <li className={style.mobile_none}>
                <img src={whatsappIcon} className={style.icon_footer} />
                Whatsapp
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
