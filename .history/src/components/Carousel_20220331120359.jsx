import React, { useEffect, useState } from 'react'
import { getCollection, getCollectionById } from '../container/httpRequest'

const Carousel = () => {
    const [data, setData] = useState([])

    const getCollectionPhoto = async () => {
        const fetchData = await getCollectionById(11)
        // const jsonData = await data.json()
        setData(fetchData)
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
