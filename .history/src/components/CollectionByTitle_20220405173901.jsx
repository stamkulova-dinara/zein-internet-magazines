import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import style from "../assets/styles/cardSlider.module.css";


const CollectionByTitle = () => {
    const params = useParams()
    const [collectionByTitle, setCollectionByTitle] = useState([])
    const id = params.id

    // const getCollectionById = async () => {
    //     await fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/${params.id}`)
    //     .then(res=>res.json())
    //     .then(json=> setCollectionByTitle(json.data))
    //   }
    const getCollectionById = async () => {
        await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/products')
        .then(res=>res.json())
        .then(json=> setCollectionByTitle(json))
      }

     useEffect(() => {
         getCollectionById()
     }, []) 
     console.log(collectionByTitle)
     
  return (
    <div className={style.content}>
    <div className={style.swiper_wrap}>
      {collectionByTitle.map(el => {
        if (el.collectionId === 2 ) {
          <h1>{el.title}</h1>
          // <Link to={`/collections/${params.id}/product/` + el.id}>
          // <div className={style.card_slider} key={el.id}>
          //  <Swiper
          //    modules={[Scrollbar, Autoplay, A11y]}
          //    spaceBetween={50}
          //    slidesPerView={1}
          //    autoplay={true}
          //    scrollbar={{ draggable: true }}
          //    className={style.swipers}
          //  >
          //    {el.image.map((im) => (
          //      <>
          //        <SwiperSlide>
          //          <img src={im} alt="" className={style.swiper_image} />
          //        </SwiperSlide>
  
          //        </>
          //    ))}
          //  </Swiper>
          //  <div className={style.card_info}>
          //    <p id={style.title}>{el.title}</p>
          //    <h6>
          //      {el.price} p{" "}
          //      <span className={style.old_price}>{el.oldPrice} c.</span>
          //    </h6>
          //    <p className={style.size}>Размер: {el.size}</p>
          //    <div className={style.product_color}>
          //      {el.color.map((e) => (
          //        <div
          //          style={{
          //            backgroundColor: e,
          //            borderRadius: "50%",
          //            width: "8px",
          //            height: "8px",
          //            marginRight: "10px",
          //          }}
          //          id={style.product_color}
          //        ></div>
          //      ))}
          //    </div>
          //  </div>
          //  </div>
          //  </Link>
        )
        })}
  </div>
</div>
  )
}

export default CollectionByTitle