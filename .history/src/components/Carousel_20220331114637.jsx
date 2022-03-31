import React, { useEffect } from 'react'
import { getCollection } from '../container/httpRequest'

const Carousel = () => {

    const getCollectionPhoto = async () => {
        const data = await getCollection()
        const json = data.json()
        console.log(json)
    }

    useEffect(()=>{
        get
    })
  return (
    <div>

    </div>
  )
}

export default Carousel
