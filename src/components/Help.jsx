import React, { useState, useEffect } from "react";
import style from "../assets/styles/help.module.css";
import { getInfo } from "../container/httpRequest";
import AccordionComponent from "./accordion/Accordion";

const Help = () => {
  const [data, setData] = useState({});

  const getOffer = async () => {
    const fetchData = await getInfo();
    setData(fetchData[0].help);
  };

  useEffect(() => {
    getOffer();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, []);
  return (
    <section className={style.help_content}>
      <img src={data.image} className={style.help_image} />
      <div className={style.help_info}>
        <h4>Помощь</h4>
        {data?.helpItems?.map((el, index) => (
          <div id={style.item} >
          <AccordionComponent title={el.title} content={el.text} key={index}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Help;
