import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import style from "../assets/styles/cardSlider.module.css";
import { FiHeart } from 'react-icons/fi'
import { RiHeartFill } from 'react-icons/ri'

const Hit = () => {
  const [newClothes, setNewClothes] = useState([]);
  const [isFavorites, setIsFavorites] = useState([]);

  const onClickFavouriteTrue = (id) => {
    setIsFavorites([...isFavorites, id])
    // localStorage.setItem('id', {id})
    
  }
  const onClickFavouriteFalse = (id) => {
    setIsFavorites(isFavorites.filter(item => id!==item))
    // localStorage.removeItem('id')
    
  }

  const getNewClothes = async () => {
    const fetchData = await fetch(
      "https://623c10012e056d1037f94796.mockapi.io/api/v1/products"
    );
    const jsonData = await fetchData.json();
    setNewClothes(jsonData);
    console.log(newClothes)
  };

  console.log(newClothes)
  useEffect(() => {
    getNewClothes();
  }, []);
  return (
    <>
    <div className={style.swiper_wrap}>
    {newClothes.slice(0, 22).map((el) => {
      if (el.status === 'sale') {
        return (
          <div className={style.card_slider} key={el.id}>
            {el.sale !== null ? (
               <div className={style.arrow}>
               <span className={style.arrow_right}>{el.sale}%</span>
               </div>
            ) : (
              null
            )}
            <div className={style.likes} 
                onClick={() => {
                  isFavorites.includes(el.id) ? 
                    onClickFavouriteFalse(el.id) : onClickFavouriteTrue(el.id)
                }} 
                key={el.id}>
              {!isFavorites.includes(el.id) ? <FiHeart className={style.unlike} key={el.id}/> : <RiHeartFill className={style.like} key={el.id}/> }
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