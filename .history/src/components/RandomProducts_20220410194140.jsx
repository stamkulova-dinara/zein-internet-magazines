import React, { useEffect, useState } from 'react'
import { getProduct } from '../container/httpRequest'

const RandomProducts = () => {
    const [products, setProducts] = useState([])
    const collectionId =  [1, 2, 3, 4, 5, 6, 7, 8]

    const Products = async () => {
        const data = await getProduct()
        setProducts(data)
    }

    useEffect(() => {
        Products()
    }, [])

    console.log(products);

    // console.log(randomProducts)

    // const randomProducts = products.filter(el => el.collectionId === 1 )
  return (
    <div>

    </div>
  )
}

export default RandomProducts