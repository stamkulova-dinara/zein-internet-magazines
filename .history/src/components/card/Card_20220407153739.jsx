import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { FiHeart } from 'react-icons/fi'
import { RiHeartFill } from 'react-icons/ri'
import style from "../../assets/styles/cardSlider.module.css";

const Card = ({product}) => {
    const
    const [isFavorites, setIsFavorites] = useState([]);
    // const id = params.id
    // console.log(id)

  const onClickFavouriteTrue = (id) => {
    setIsFavorites([...isFavorites, id]) 
    localStorage.setItem('favorite', id)
  }
  const onClickFavouriteFalse = (id) => {
    setIsFavorites(isFavorites.filter(item => id!==item)) 
  }
  return (
    <div className={style.card_slider} key={el.id}>
    {product.sale !== null ? (
           <div className={style.arrow}>
           <span className={style.arrow_right}>{product.sale}%</span>
           </div>
        ) : (
          null
        )}
        <div className={style.likes} 
        onClick={() => {
          isFavorites.includes(product.id) ? 
            onClickFavouriteFalse(product.id) : onClickFavouriteTrue(product.id)
        }} 
        key={el.id}>
      {!isFavorites.includes(product.id) ? <FiHeart className={style.unlike} key={product.id}/> : <RiHeartFill className={style.like} key={product.id}/> }
    </div>
     <Swiper
     modules={[Scrollbar, Autoplay, A11y]}
     spaceBetween={50}
     slidesPerView={1}
     autoplay={true}
     scrollbar={{ draggable: true }}
     className={style.swipers}
   >
    {product.image.map(im => (
      <SwiperSlide>
      <img src={im} alt="" className={style.swiper_image} />
    </SwiperSlide>
    ))}
    </Swiper>
    <div className={style.card_info}>
    <Link to={`/collections/${params.id}/product/` + el.id}>
    <p id={style.title}>{product.title}</p>
             <h6>
               {product.price} p{" "}
               <span className={style.old_price}>
                   {product.oldPrice} c
                </span>
             </h6>
             <p className={style.size}>Размер: {product.size}</p>
    <div className={style.product_color}>
    {product.color.map(e => (
      <div
      key={im.index}
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
}

export default Card