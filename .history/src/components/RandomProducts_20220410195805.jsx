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

    // console.log(products);
    const ra = collectionId.map(id => {
        const randomProducts = products.filter(el => el.collectionId === id )
        // console.log('h',randomProducts)
    })

    lo
  return (
    <div>

    </div>
  )
}

export default RandomProducts