import React, { useEffect } from 'react'
import { getCollection } from '../container/httpRequest'

const Carousel = () => {

    const getCollectionPhoto = async () => {
        const data = await getCollection()
        const jsonData = await data.json()
        console.log(json)
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
