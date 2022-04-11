import React, { useState, useEffect } from "react";
import style from "../assets/styles/content.module.css";
import { getProduct } from "../container/httpRequest";
import { Button } from "react-bootstrap";
import Card from "./card/Card";

const Hit = () => {
  const [saleClothes, setSaleClothes] = useState([]);
  const [limit, setLimit] = useState(8)

  const getSaleClothes = async () => {
    const fetchData = await getProduct();
    setSaleClothes(fetchData);
  };

  useEffect(() => {
    getSaleClothes();
  }, [limit]);

  console.log(limit)


  const limCount = () => {
    if (limit === 24 ) {
      return;
    }
    setLimit(limit-8);
  }

  const saleProducts = saleClothes.filter((item) => item.status === "sale");
  console.log(saleProducts)
  return (
    <>
      <div className={style.theme}>
        <h3>Хит продаж</h3>
      </div>
      <div className={style.swiper_wrap}>
        {(saleProducts) ? saleProducts.slice(0, limit).map(item => (
            <Card product={item} key={item.id}/>
        )) : <div>Loading...</div>}
      </div>
      <div className={style.btn}>
        {limit !== 24 ? 
          <Button variant="dark" onClick={() => setLimit(limit+8)}>Ещё</Button>
          :<Button variant="dark" onClick={limCount}>Отмена</Button>

        }
      </div>
    </>
  );
};

export default Hit;
