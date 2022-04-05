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

    // const getCollectionById = async () => {
    //     await fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/${params.id}`)
    //     .then(res=>res.json())
    //     .then(json=> setCollectionByTitle(json.data))
    //   }
    const getCollectionById = async () => {
        await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/products')
        .then(res=>res.json())
        .then(json=> setCollectionByTitle(json.data))
      }

     useEffect(() => {
         getCollectionById()
     }, []) 
     console.log(collectionByTitle)
     
  return (
    <div className={style.content}>
    <div className={style.swiper_wrap}>
      {collectionByTitle.map(el => {
        if (collectionId === {params.id}) (

        )
        })}
  </div>
</div>
  )
}

export default CollectionByTitle