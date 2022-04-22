import React, { useEffect, useState } from "react";
import style from "../../assets/styles/content.module.css";
import Similar from "../card/Similar";
import { SwiperSlide } from "swiper/react";
import MobileCarousel from "../mobileCarousel/MobileCarousel";

const SimilarProduct = ({ id }) => {
  const [similar, setSimilar] = useState([]);

  const getCollectionById = async () => {
    const fetchData = await fetch(
      "https://623c10012e056d1037f94796.mockapi.io/api/v1/products"
    );
    const jsonData = await fetchData.json();
    setSimilar(jsonData);
  };

  useEffect(() => {
    getCollectionById();
  }, []);

  const similarProducts = similar.filter((item) => item.collectionId === id);
  return (
    <>
      <h4 id={style.similar_product}>Похожие товары</h4>
      <div className={style.swiper_wrap}>
        {similarProducts ? (
          similarProducts
            .slice(0, 5)
            .map((el) => <Similar product={el} key={el.id} />)
        ) : null}
      </div>
      <MobileCarousel className={style.mobile_swiper} perView={1.5}>
      {similarProducts ? (
      similarProducts?.slice(0, 5).map(el=> (
        <SwiperSlide>
          <Similar product={el} key={el.id}/>
        </SwiperSlide>
      ))) : null}
      </MobileCarousel>
    </>
  );
};

export default SimilarProduct;
