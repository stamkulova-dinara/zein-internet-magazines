import React, { useState, useEffect } from "react";
import style from "../assets/styles/home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/styles/slider.css'
// import 'swiper/css/scrollbar';

const Card = () => {
  const [state, setState] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);

  const getClothes = async () => {
    const data = await fetch(
      "https://623c10012e056d1037f94796.mockapi.io/api/v1/collection"
    );
    const jsonData = await data.json();
    setState(jsonData);
    console.log(state);
  };
  console.log(colorIndex);

  useEffect(() => {
    getClothes();
  }, []);
  return (
    <div>
      {state.map((el) => {
        if (el.new == true) {
          return (
            <div className={style.cards_all}>
            <div key={el.id} className={style.cards}>
              {/* <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={style.swiper}
              >
                {el.image.map((im) => (
                  <SwiperSlide>
                    <img src={im} className={style.photo} />
                  </SwiperSlide>
                ))}
              </Swiper> */}
              <div className={style.product_color}>
                {el.color.map((col) => (
                  <div
                    style={{
                      backgroundColor: col,
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      marginRight: "10px",
                    }}
                    onClick={() => setColorIndex(el.color.indexOf(col))}
                  ></div>
                ))}
              </div>
            </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;