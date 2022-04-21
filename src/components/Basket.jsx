import React, { useEffect, useState } from "react";
import style from "../assets/styles/basket.module.css";
import ScrollToTop from "./FloatingButton/ScrollToTop";
import BasketCard from "./card/BasketCard";
import Checkout from "../container/checkout/Checkout";
import line from '../assets/icon/line.png'

const Basket = ({color}) => {
  const [basketProduct, setBasketProduct] = useState([]);
  const [allProduct, setAllProduct] = useState(0);
  const [sum, setSum] = useState(0);
  const [total, setTotal] = useState(0);

  function getCount(arg, option) {
    if (option == "plus") {
      setAllProduct((prev) => prev + arg);
    } else if (option == "minus") {
      setAllProduct((prev) => prev - arg);
    }
  }

  function sumTotal(arg, option) {
    if (option == "plus") {
      setSum((prev) => prev + arg);
    } else if (option == "minus") {
      setSum((prev) => prev - arg);
    }
  }

  function totalPro(arg, option) {
    if (option == "plus") {
      setTotal((prev) => prev + arg);
    } else if (option == "minus") {
      setTotal((prev) => prev - arg);
    }
  }

  const sale = total - sum;

  useEffect(() => {
    if(localStorage.getItem('basket')===null){
      return null
    }
    const basket = localStorage.getItem("basket");
    setBasketProduct(JSON.parse(basket));
  }, []);

  function del(product) {
    for (let i = 0; i < basketProduct.length; i++) {
      if (basketProduct[i].id == product) {
        basketProduct.splice(i, 1);
        localStorage.setItem("basket", JSON.stringify(basketProduct));
        return;
      }
    }
  }

  return (
    <section className={style.content}>
      <div className={style.products}>
        {basketProduct?.map((el) => (
          <BasketCard
            product={el}
            key={el.id}
            del={() => del(el.id)}
            getCount={getCount}
            sumTotal={sumTotal}
            totalPro={totalPro}
            color={color}
          />
        ))}
      </div>
      {basketProduct.length !== 0 ? (
        <div className={style.order_amount}>
        <h6 className={style.order_theme}>Сумма заказа</h6>
        <div className={style.order_product}>
          <p className={style.text_theme}>Количество линеек:</p>
          <p className={style.order_text}>{basketProduct.length} шт</p>
        </div>
        <div className={style.order_product}>
          <p className={style.text_theme}>Количество товаров:</p>
          <p className={style.order_text}>{allProduct} шт</p>
        </div>
        <div className={style.order_product}>
          <p className={style.text_theme}>Стоимость:</p>
          <p className={style.order_text}> {total} рублей</p>
        </div>
        <div className={style.order_product}>
          <p className={style.text_theme}>Скидка:</p>
          <p className={style.order_text}>{sale} рублей</p>
        </div>
        <img src={line} className={style.line}/>
        <div className={style.order_product}>
          <p>Итого к оплате:</p>
          <p className={style.order_text}>{sum} рублей</p>
        </div>
        <Checkout price={total} sale={sale} totalPayable={sum} product={basketProduct} allProduct={allProduct}/>
      </div>
      ) : null}
      <ScrollToTop />
    </section>
  );
};

export default Basket;
