import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import style from "../assets/styles/cardSlider.module.css";

const Hit = () => {
  const [newClothes, setNewClothes] = useState([]);
  const [isFavorites, setIsFavorites] = useState(false);

  const getNewClothes = async () => {
    const fetchData = await fetch(
      "https://623c10012e056d1037f94796.mockapi.io/api/v1/collection"
    );
    const jsonData = await fetchData.json();
    setNewClothes(jsonData);
  };

  console.log(newClothes)

  const changesat

  useEffect(() => {
    getNewClothes();
  }, []);
  return (
    <>
    <div className={style.swiper_wrap}>
    {newClothes.slice(0, 9).map((el) => {
      if (el.hitSale === true) {
        return (
          <div className={style.card_slider}>
            {el.sale !== null ? (
               <div className={style.arrow}>
               <span className={style.arrow_right}>{el.sale}%</span>
               </div>
            ) : (
              null
            )}
            <div>
            </div>
            <Swiper
              modules={[Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              className={style.swipers}
            >
              {el.image.map((im) => (
                <>
                  <SwiperSlide>
                    <img src={im} alt="" className={style.swiper_image} />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
            <div className={style.card_info}>
              <p id={style.title}>{el.title}</p>
              <h6>
                {el.price} p{" "}
                <span className={style.old_price}>{el.oldPrice} c.</span>
              </h6>
              <p className={style.size}>Размер: {el.size}</p>
              <div className={style.product_color}>
                {el.color.map((e) => (
                  <div
                    style={{
                      backgroundColor: e,
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      marginRight: "10px",
                    }}
                    id={style.product_color}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        );
      }
    })}
  </div>
</>
  )
}

export default Hit