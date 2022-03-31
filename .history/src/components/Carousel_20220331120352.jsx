import React, { useEffect, useState } from 'react'
import { getCollection } from '../container/httpRequest'

const Carousel = () => {
    const [data, setData] = useState([])

    const getCollectionPhoto = async () => {
        const fetchData = await getCollectionB()
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
