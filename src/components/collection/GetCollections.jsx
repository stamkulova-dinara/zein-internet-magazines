import React, { useState, useEffect } from "react";
import style from "../../assets/styles/collection.module.css";
import { getCollection } from "../../container/httpRequest";
import CollectionCard from "../card/CollectionCard";
import MobileCarousel from "../mobileCarousel/MobileCarousel";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

const GetCollections = () => {
  const [collections, setCollections] = useState([]);
  const [limit, setLimit] = useState(4);

  const getCollections = async () => {
    const data = await getCollection();
    setCollections(data);
  };

  useEffect(() => {
    getCollections();
  }, [limit]);

  return (
    <div className={style.content}>
      <div className={style.theme}>
        <h3>Коллекция</h3>
      </div>
      <div className={style.card_desktop}>
        {collections ? (
          collections
            .slice(0, limit)
            .map((el) => <CollectionCard collection={el} key={el.id} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <MobileCarousel
        className={style.mobile_swiper}
        perView={1.2}
      >
         {collections ? (
           collections
          .slice(0, limit)
          .map((el, index) =>  (
            <SwiperSlide className={style.mobile_slider}>
              <CollectionCard collection={el} key={el.id} />
            </SwiperSlide>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </MobileCarousel>
      <div className={style.btn}>
          <button id={style.more_btn} onClick={() => setLimit(limit + 4)}>
            Ещё
          </button>
      </div>
    </div>
  );
};

export default GetCollections;
