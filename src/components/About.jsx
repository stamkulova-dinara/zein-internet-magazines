import React, { useEffect, useState } from "react";
import style from "../assets/styles/about.module.css";
import FloatingBtn from "./FloatingButton/FloatingBtn";
import { getInfo } from "../container/httpRequest";

const About = () => {
  const [data, setData] = useState({});

  const getFooterInfo = async () => {
    const fetchData = await getInfo();
    setData(fetchData[0].about);
  };

  useEffect(() => {
    getFooterInfo();
  }, []);
  return (
    <section className={style.container}>
      <div className={style.about_photos}>
        <div>
        <img src={data.img1} className={style.photo} />
        <div>
          <img src={data.img2} className={style.about_photo} />
          <img src={data.img3} className={style.girl_face} />
        </div>
        </div>
      </div>
      <div className={style.about}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
      </div>
      <FloatingBtn />
    </section>
  );
};

export default About;
