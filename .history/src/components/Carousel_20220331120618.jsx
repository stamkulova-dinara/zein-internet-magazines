import React, { useEffect, useState } from 'react'
import {getCollectionById } from '../container/httpRequest'
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

    </div>
  )
}

export default Carousel
