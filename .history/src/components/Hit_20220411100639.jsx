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
        {(saleProducts) ? saleProducts.slice(0, limit).map((item, react_devtools_backend.js:3973 Warning: Encountered two children with the same key, `20`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    at div
    at Hit (http://localhost:3000/main.99d4c6d9be4f512623a9.hot-update.js:37:88)
    at div
    at Home
    at Routes (http://localhost:3000/static/js/bundle.js:260410:5)
    at Router (http://localhost:3000/static/js/bundle.js:260343:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:259819:5)
    at div
    at App (http://localhost:3000/static/js/bundle.js:62:91)) => (
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
