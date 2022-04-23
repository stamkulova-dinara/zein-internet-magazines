import React, { useEffect, useState } from "react";
import style from "../../assets/styles/content.module.css";
import Similar from "../card/Similar";
import { SwiperSlide } from "swiper/react";
import MobileCarousel from "../mobileCarousel/MobileCarousel";
import { getProduct } from "../../container/httpRequest";

const SimilarProduct = ({ id }) => {
  const [similar, setSimilar] = useState([]);

  const getCollectionById = async () => {
    const fetchData = await getProduct()
    setSimilar(fetchData);
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
