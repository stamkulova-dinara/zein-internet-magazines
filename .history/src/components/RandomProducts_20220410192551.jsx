import React, { useEffect } from 'react'
import { getProduct } from '../container/httpRequest'

const RandomProducts = () => {
    const collectionId =  [1, 2, 3, 4, 5, 6, 7, 8]

    const Products = async () => {
        const data = await getProduct()
        console.log(data)
    }

    useEffect(() => {
        Products()
    }, [])

    const 
  return (
    <div>

    </div>
  )
}

export default RandomProducts