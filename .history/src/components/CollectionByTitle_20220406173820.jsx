import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { FiHeart } from 'react-icons/fi'
import { RiHeartFill } from 'react-icons/ri'
import style from "../assets/styles/cardSlider.module.css";
import UniCard from './Card'

const CollectionByTitle = () => {
    const params = useParams()
    const [collectionByTitle, setCollectionByTitle] = useState([])
    const [isFavorites, setIsFavorites] = useState([]);
    const id = params.id
    console.log(id)

  const onClickFavouriteTrue = (id) => {
    setIsFavorites([...isFavorites, id]) 
    localStorage.  
  }
  const onClickFavouriteFalse = (id) => {
    setIsFavorites(isFavorites.filter(item => id!==item)) 
  }

    const getCollectionById = async () => {
     const fetchData = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/products')
     const jsonData = await fetchData.json();
     setCollectionByTitle(jsonData)
      }
    
    useEffect(() => {
         getCollectionById()
         console.log(collectionByTitle, id)
     }, []) 

     const collectioProducts = collectionByTitle.filter(item => item.collectionId === id)
     console.log(collectioProducts);
     
  return (
    <div className={style.content}>
    <div className={style.swiper_wrap}>
      {collectioProducts.map(el => {
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
            {el.image.map(im => (
              <SwiperSlide>
              <img src={im} alt="" className={style.swiper_image} />
            </SwiperSlide>
            ))}
            </Swiper>
            <div className={style.card_info}>
            <Link to={`/collections/${params.id}/product/` + el.id}>
            <UniCard title={el.title} price={el.price} oldPrice={el.oldPrice} size={el.size}/>
            <div className={style.product_color}>
            {el.color.map(im => (
              <div
              key={im.index}
               style={{
                 backgroundColor: im
               }}
               id={style.product_color}
             ></div>
            ))}
            </div>
            </Link>
            </div>
            </div>
      )  
        })}
  </div>
  </div>
  )
}

export default CollectionByTitle