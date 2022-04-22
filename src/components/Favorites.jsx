import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import style from "../assets/styles/content.module.css";
import FloatingBtn from "./FloatingButton/FloatingBtn";
import ScrollToTop from "./FloatingButton/ScrollToTop";
import RandomProducts from "./random/RandomProducts";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
    if(localStorage.getItem('favorite')===null){
      return null
    }
    const favorite = localStorage.getItem("favorite");
    setFavorites(JSON.parse(favorite));
  }, []);

  return (
    <section className={style.content}>
      <h2>Избранное</h2>
      {favorites?.length !== 0 ? (
        <>
          <p className={style.product_length}>
            Товаров в избранном: {favorites.length}
          </p>
          <div className={style.swipers}>
            {favorites?.map((el) => (
              <Card product={el} key={el.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className={style.product_length}>
            У Вас пока нету избранных товаров
          </p>
          <RandomProducts />
        </>
      )}
      <ScrollToTop />
      <FloatingBtn />
    </section>
  );
};

export default Favorites;
