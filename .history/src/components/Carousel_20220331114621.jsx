import React from 'react'
import { getCollection } from '../container/httpRequest'

const Carousel = () => {

    const getCollectionPhoto = async () => {
        const data = await getCollection()
        const json = data.json()
        console.log(json)
    }
  return (
    <div>

    </div>
  )
}

export default Carousel
