import React, { useEffect, useState } from 'react'
import { getProduct } from '../container/httpRequest'

const RandomProducts = () => {
    const [products, setProducts] = useState([])
    const collectionId =  [1, 2, 3, 4, 5, 6, 7, 8]

    const Products = async () => {
        const data = await getProduct()
        console.log(data)
    }

    useEffect(() => {
        Products()
    }, [])

    const randomProducts = 
  return (
    <div>

    </div>
  )
}

export default RandomProducts