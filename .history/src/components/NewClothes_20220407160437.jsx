import React, { useEffect, useState } from "react";
import style from "../assets/styles/cardSlider.module.css";
import { getProduct } from "../container/httpRequest";
import { Button } from "react-bootstrap";
import Card from "./card/Card";

const NewClothes = () => {
  const [newClothes, setNewClothes] = useState([]);

  const getNewClothes = async () => {
    const FetchData = await getProduct()
    setNewClothes(FetchData);
  };

  useEffect(() => {
    getNewClothes();
  }, []);

  const newProducts = newClothes.filter(item => item.status === 'new')
  return (
    <>
    <div className={style.theme}>
        <h3>Новинки</h3>
      </div>
      <div className={style.swiper_wrap}>
        {(newProducts) ? newProducts.slice(0, 8).map((el) => (
              <Card/>
        )) : <div></div>}
      </div>
      <div className={style.btn}>
      <Button variant="dark">Ещё</Button>{' '}
    </div>
    </>
  );
};

export default NewClothes;
