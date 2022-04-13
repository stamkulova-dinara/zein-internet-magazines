import React, { useEffect, useState } from "react";
import style from "../assets/styles/offer.module.css";
import { getInfo } from "../container/httpRequest";

const Offer = () => {
  const [data, setData] = useState({});
  const getOffer = async () => {
    const fetchData = await getInfo();
    setData(fetchData[0].offer);
  };

  useEffect(() => {
    getOffer();
  }, []);
  return (
    <section className={style.content}>
      <h3>{data.title}</h3>
      <p className={style.offer_text}>{data.text}</p>
    </section>
  );
};

export default Offer;
