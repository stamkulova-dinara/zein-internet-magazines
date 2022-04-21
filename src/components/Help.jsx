import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import style from "../assets/styles/help.module.css";
import { getInfo } from "../container/httpRequest";
import AccordionComponent from "./accordion/Accordion";

const Help = () => {
  const [data, setData] = useState({});
  const [currentActiveKey, setCurrentActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };

  const getOffer = async () => {
    const fetchData = await getInfo();
    setData(fetchData[0].help);
  };

  useEffect(() => {
    getOffer();
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
