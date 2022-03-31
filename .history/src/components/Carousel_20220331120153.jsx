import React, { useEffect } from 'react'
import { getCollection } from '../container/httpRequest'

const Carousel = () => {
    const [data, setData] = useS

    const getCollectionPhoto = async () => {
        const data = await getCollection()
        // const jsonData = await data.json()
        (data)
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
