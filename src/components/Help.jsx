import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import style from "../assets/styles/help.module.css";
import { getInfo } from "../container/httpRequest";

const Help = () => {
  const [data, setData] = useState({});
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
        <Accordion>
          {data?.helpItems?.map((el, index) => (
            <Accordion.Item eventKey={index} id={style.item} key={el.id}>
              <Accordion.Header id={style.item_info}>
                {el.title}
              </Accordion.Header>
              <Accordion.Body>{el.text}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Help;
