import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import style from "../assets/styles/product.module.css";
import { Button } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import bag from "../assets/icon/Icon.png";
import { getProductById } from "../container/httpRequest";
import Basket from "./Basket";

const Product = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [basketpage, setBasketPage] = useState([]);

  const getProduct = async () => {
    const fetchData = await getProductById(params.productId);
    setData(fetchData);
  };

  useEffect(() => {
    getProduct();
  }, []);

 
  useEffect(() => {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket?.map((id) => {
      if (id.id === product.id) {
        setBasketPage(true);
      }
    });
  }, [basketpage, data]);

  function putProducts(product) {
    let basket = JSON.parse(localStorage.getItem("basket"));

    if (!basket) {
      basket = [product];
      localStorage.setItem("basket", JSON.stringify(basket));
      return;
    }
    for (let i = 0; i < favorite.length; i++) {
      if (favorite[i].id === product.id) {
        setLikePage(false);
        favorite.splice(i, 1);
        localStorage.setItem("favorite", JSON.stringify(favorite));
        return;
      }
    }
    favorite.push(product);
    setLikePage(true);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    return;
  }

  return (
      <div className={style.product}>
        <div className={style.product_images}>
          {data?.image?.slice(0, 4).map((el) => (
            <div className={style.product_img} key={el.index}>
              <img src={el} className={style.product_image}/>
            </div>
          ))}
        </div>
        <div className={style.product_info}>
          <h4 className={style.title}>{data.title}</h4>
          <h6 className={style.theme}>
            Артикул: <span className={style.art}>{data.art}</span>
          </h6>
          <div className={style.product_color}>
            <div className={style.color_theme}>Цвет:</div>
            <div className={style.color}>
              {data?.color?.map((e) => (
                <div
                  key={e.index}
                  style={{
                    backgroundColor: e,
                    borderRadius: "50%",
                    width: "8px",
                    height: "8px",
                    marginLeft: "10px",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <h4 className={style.price}>
            {data.price} p{" "}
            <span className={style.old_price}>{data.oldPrice} р.</span>
          </h4>
          <h6>О товаре:</h6>
          <p className={style.description}>{data.description}</p>
          <div className={style.info}>
            <div className={style.themes}>
              Размерный ряд:{" "}
              <span className={style.theme_info}>{data.size}</span>{" "}
            </div>
            <div className={style.themes}>
              Состав ткани:{" "}
              <span className={style.theme_info}>{data.fabric}</span>
            </div>
            <div className={style.themes}>
              Количество в линейке :
              <span className={style.theme_info}>{data.quantity}</span>
            </div>
            <div className={style.themes}>
              Материал: <span className={style.theme_info}>{data.fabric}</span>
            </div>
          </div>
          <div className={style.shopping_bag_btns}>
            <Button variant="dark" id={style.add_bag_btn}>
              <img src={bag} className={style.bag_icon} /> Добавить в корзину
            </Button>{" "}
            <Button variant="dark" id={style.like_btn}>
              <FiHeart className={style.product_like_icon} />
            </Button>{" "}
          </div>
        </div>
      </div>
  );
};

export default Product;
