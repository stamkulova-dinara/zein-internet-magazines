import React from 'react'
import { getProduct } from '../container/httpRequest'

const RandomProducts = () => {
    const collectionId =  [1, 2, 3, 4, 5, 6, 7, 8]

    const Products = async () => {
        const data = await getProduct()
        console.lo
    }
  return (
    <div>

    </div>
  )
}

export default RandomProducts