import React, { useEffect, useState } from 'react'
import {getCollectionById } from '../container/httpRequest'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    const [data, setData] = useState({})

    const getCollectionPhoto = async () => {
        const fetchData = await getCollectionById(11)
        const jsonData = await fetchData.json()
        setData(jsonData)
        // console.log(data)
    }

    useEffect(()=>{
        getCollectionPhoto()
    }, [])
  return (
    <div>
        {data.image.map((el)=> {
            console.log(el)
        })}

    </div>
  )
}

export default Carousel
