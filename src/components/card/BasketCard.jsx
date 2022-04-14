import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import style from "../../assets/styles/basket.module.css";

const BasketCard = ({ product, del, getCount, sumTotal, totalPro }) => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
    getCount(1, "minus");
    sumTotal(product.price, "minus");
    totalPro(product.oldPrice, "minus");
  };

  const handleIncrement = () => {
    getCount(1, "plus");
    setCount(count + 1);
    sumTotal(product.price, "plus");
    totalPro(product.oldPrice, "plus");
  };

  useEffect(() => {
    getCount(count, "plus");
    const sum = count * product.price;
    sumTotal(sum, "plus");
    const old = count * product.oldPrice;
    totalPro(old, "plus");
  }, []);

  return (
    <div className={style.product}>
      <div className={style.info_block}>
        <img src={product.image[0]} className={style.image_product} />
        <div className={style.product_info}>
          <h6 className={style.product_title}>{product.title}</h6>
          <p className={style.product_color}>
            Размер: <span>{product.size}</span>
          </p>
          <div className={style.product_color}>
            Цвет:
            {product.color?.map((color) => (
              <div style={{ backgroundColor: color }} id={style.colors}></div>
            ))}
          </div>
          <h6 className={style.product_price}>
            {product.price} р{" "}
            <span className={style.product_old_price}>
              {product.oldPrice} р
            </span>
          </h6>
          <div className={style.count}>
            <button onClick={handleDecrement} className={style.product_btn}>
              -
            </button>
            <h5 className={style.product_count}>{count}</h5>
            <button
              onClick={handleIncrement}
              className={style.product_btn}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <FaTimes key={product.id} onClick={del} />
    </div>
  );
};

export default BasketCard;
