import React, { useEffect, useState } from 'react'
import {getCollectionById } from '../container/httpRequest'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    const [data, setData] = useState([])

    const getCollectionPhoto = async () => {
        const fetchData = await getCollectionById(11)
        // const jsonData = await data.json()
        setData(fetchData)
        console.log(data)
    }

    useEffect(()=>{
        getCollectionPhoto()
    }, [])
  return (
    <div>
        {data.image.map((el)=> {
            console.log(el)
        })}
        {/* <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {data.image.map(img => (
             <SwiperSlide>
                 <img src={img}/>
             </SwiperSlide>
        ))}
      ...
    </Swiper> */}

    </div>
  )
}

export default Carousel
