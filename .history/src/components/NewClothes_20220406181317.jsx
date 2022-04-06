import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import style from "../assets/styles/cardSlider.module.css";
import { FiHeart } from 'react-icons/fi'
import { RiHeartFill } from 'react-icons/ri'
import { getProduct } from "../container/httpRequest";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import UniCard from './Card'

const NewClothes = () => {
  const [newClothes, setNewClothes] = useState([]);
  const [isFavorites, setIsFavorites] = useState([]);

  const onClickFavouriteTrue = (id) => {
    setIsFavorites([...isFavorites, id])   
  }
  const onClickFavouriteFalse = (id) => {
    setIsFavorites(isFavorites.filter(item => id!==item)) 
  }

  const getNewClothes = async () => {
    const FetchData = await getProduct()
    setNewClothes(FetchData);
  };

  useEffect(() => {
    getNewClothes();
  }, []);

  const newProducts = newClothes.filter(item => item.status === 'new')
  return (
    <>
    <div className={style.theme}>
        <h3>Новинки</h3>
      </div>
      <div className={style.swiper_wrap}>
        {newProducts.slice(0, 8).map((el) => (
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
                      <SwiperSlide key={im.index}>
                        <img src={im} alt="" className={style.swiper_image} />
                      </SwiperSlide>
                    </>
                  ))}
                </Swiper>
                <div className={style.card_info}>
                <Link to={`/collections/${params.}/product/` + el.id}>
                <UniCard title={el.title} price={el.price} oldPrice={el.oldPrice} size={el.size}/>
                  <div className={style.product_color}>
                    {el.color.map((e) => (
                      <div
                        key={e.index}
                        style={{
                          backgroundColor: e
                        }}
                        id={style.product_color}
                      ></div>
                    ))}
                  </div>
                  </Link>
                </div>
              </div>
            )
        )}
      </div>
      <div className={style.btn}>
      <Button variant="dark">Ещё</Button>{' '}
    </div>
    </>
  );
};

export default NewClothes;
