import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../assets/styles/news.module.css";
import FloatingBtn from "./FloatingButton/FloatingBtn";
import { getNews } from "../container/httpRequest";

const News = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(8);
  const [fetching, setfetching] = useState(true);
  const [showMore, setShowMore] = useState(false)

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setfetching(true);
    }
  };

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://623c10012e056d1037f94796.mockapi.io/api/v1/news?p=1&l=${currentPage}`
        )
        .then((response) => {
          setData([...response.data]);
          setCurrentPage((prev) => prev + 8);
        })
        .finally(() => setfetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <section className={style.news_content}>
      <h2>Новости</h2>
      {data.map((el) => (
        <div className={style.card_news} key={el.id}>
          <img src={el.image} className={style.image_news} />
          <div className={style.info_news}>
            <h6 className={style.info_title}>{el.title}</h6>
            <p id={style.desc}>{el.description}</p>
          </div>
          <div className={style.info_news_mobile}>
            <h6 className={style.info_title}>{el.title}</h6>
            <p className={style.info_descr}>{showMore ? el.description : `${el.description.substring(0, 135)}`}</p>
            <button className={style.show_more_btn} onClick={() => setShowMore(!showMore)}>{!showMore ? 'Читать полностью' : 'Скрыть'}</button>
          </div>
        </div>
      ))}
      <FloatingBtn />
    </section>
  );
};

export default News;