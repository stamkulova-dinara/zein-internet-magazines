import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { FiHeart } from 'react-icons/fi'
import { RiHeartFill } from 'react-icons/ri'
import style from "../../assets/styles/cardSlider.module.css";

const Card = ({product}) => {
    // const [isFavorites, setIsFavorites] = useState([]);
    const [likepage, setLikePage] = useState([]);
    


    useEffect(() => {
      let favorite = JSON.parse(localStorage.getItem("favorite"));
      favorite?.map((id) => {
        if (id.id === product.id) {
          setLikePage(true);
        }
      });
    }, [likepage, product]);
  
    function putProducts(product) {
      let favorite = JSON.parse(localStorage.getItem("favorite"));
  
      if (!favorite) {
        favorite = [product];
        localStorage.setItem("favorite", JSON.stringify(favorite));
        return;
      }
      for (let i = 0; i < favorite.length; i++) {
        if (favorite[i].id === product.id) {
          setLikePage(false);
          favorite.splice(i, 1);
          localStorage.setItem("favorite", JSON.stringify(favorite));
          // setLikeProd(false)
          return;
        }
      }
      favorite.push(product);
      setLikePage(true);
      localStorage.setItem("favorite", JSON.stringify(favorite));
      return;
    }



  // const onClickFavouriteTrue = (id) => {
  //   setIsFavorites([...isFavorites, id])     
  // }
  // const onClickFavouriteFalse = (id) => {
  //   setIsFavorites(isFavorites.filter(item => id!==item)) 
  // }

  // console.log([isFavorites])console.log([isFavorites])

  return (
    <div className={style.card_slider}>
    {product.sale !== null ? (
           <div className={style.arrow}>
           <span className={style.arrow_right}>{product.sale}%</span>
           </div>
        ) : (
          null
        )}
        <div className={style.likes} 
        onClick={()=>putProducts(product)}
        // onClick={() => {
        //   isFavorites.includes(product.id) ? 
        //     onClickFavouriteFalse(product.id) : onClickFavouriteTrue(product.id)
        // }} 
        key={product.id}>
      {likepage == ? <FiHeart className={style.unlike} key={product.id}/> : <RiHeartFill className={style.like} key={product.id}/> }
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
    <Link to={`/collections/${product.collectionId}/product/` + product.id}>
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
}

export default Card