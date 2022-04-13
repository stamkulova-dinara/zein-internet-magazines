import React, { useEffect, useState } from "react";
import { getProduct } from "../container/httpRequest";
import Similar from "./card/Similar";
import style from "../assets/styles/content.module.css";

const RandomProducts = () => {
  const [products, setProducts] = useState([]);

  const Products = async () => {
    const data = await getProduct();
    setProducts(data);
  };

  useEffect(() => {
    Products();
  }, []);

  return (
    <div className={style.box}>
      <h4>Возможно Вас заинтересует</h4>
      <div className={style.swiper_wrap}>
        {products.slice(0, 5).map((el) => (
          <Similar product={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default RandomProducts;
