import React, { useState, useEffect } from "react";
import style from "../assets/styles/cardSlider.module.css";
import { getProduct } from "../container/httpRequest";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "./card/Card";

const Hit = () => {
  const [saleClothes, setSaleClothes] = useState([]);

  const getSaleClothes = async () => {
    const fetchData = await getProduct();
    setSaleClothes(fetchData);
  };

  useEffect(() => {
    getSaleClothes();
  }, []);

  const saleProducts = saleClothes.filter((item) => item.status === "sale");
  return (
    <>
      <div className={style.theme}>
        <h3>Хит продаж</h3>
      </div>
      <div className={style.swiper_wrap}>
        {(saleProducts) ? saleProducts.slice(0, 8).map(item => (
            <Card product={item} key={item.id}/>
        )) : <div>Loading...</div>}
      </div>
      <div className={style.btn}>
        <Link to={"/collections/10"}>
          <Button variant="dark">Ещё</Button>{" "}
        </Link>
      </div>
    </>
  );
};

export default Hit;
