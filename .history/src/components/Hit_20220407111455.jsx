import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import style from "../assets/styles/cardSlider.module.css";
import { FiHeart } from "react-icons/fi";
import { RiHeartFill } from "react-icons/ri";
import { getProduct } from "../container/httpRequest";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import UniCard from './Card'

const Hit = () => {
  const [saleClothes, setSaleClothes] = useState([]);
  const [isFavorites, setIsFavorites] = useState([]);

  const onClickFavouriteTrue = (id) => {
    setIsFavorites([...isFavorites, id]);
  };
  const onClickFavouriteFalse = (id) => {
    setIsFavorites(isFavorites.filter((item) => id !== item));
  };

  const getSaleClothes = async () => {
    const fetchData = await getProduct();
    setSaleClothes(fetchData);
  };

  useEffect(() => {
    getSaleClothes();
  }, []);

  const saleProducts = saleClothes.filter((item) => item.status === "sale");
  return (
    <>
      <div className={style.theme}>
        <h3>Хит продаж</h3>
      </div>
      <div className={style.swiper_wrap}>
        {saleProducts ? (
          saleProducts.slice(0, 8).map((el) => (
            <div className={style.card_slider} key={el.id}>
              {el.sale !== null ? (
                <div className={style.arrow}>
                  <span className={style.arrow_right}>{el.sale}%</span>
                </div>
              ) : null}
              <div
                className={style.likes}
                onClick={() => {
                  isFavorites.includes(el.id)
                    ? onClickFavouriteFalse(el.id)
                    : onClickFavouriteTrue(el.id);
                }}
                key={el.id}
              >
                {!isFavorites.includes(el.id) ? (
                  <FiHeart className={style.unlike} key={el.id} />
                ) : (
                  <RiHeartFill className={style.like} key={el.id} />
                )}
              </div>
              <Swiper
                modules={[Scrollbar, Autoplay, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={true}
                scrollbar={{ draggable: true }}
                className={style.swipers}
              >
                {el.image.map((im) => (
                  <>
                    <SwiperSlide key={im.index}>
                      <img src={im} alt="" className={style.swiper_image} />
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
              <div className={style.card_info}>
              <UniCard title={el.title} price={el.price} oldPrice={el.oldPrice} size={el.size}/>
                {/* <p id={style.title}>{el.title}</p>
                <h6>
                  {el.price} p{" "}
                  <span className={style.old_price}>{el.oldPrice} c.</span>
                </h6>
                <p className={style.size}>Размер: {el.size}</p> */}
                <div className={style.product_color}>
                  {el.color.map((e) => (
                    <div
                      key={e.index}
                      style={{
                        backgroundColor: e,
                      }}
                      id={style.product_color}
                    ></div>
                  ))}
                </div>
              </div>
              </Link>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className={style.btn}>
        <Link to={"/collections/10"}>
          <Button variant="dark">Ещё</Button>{" "}
        </Link>
      </div>
    </>
  );
};

export default Hit;