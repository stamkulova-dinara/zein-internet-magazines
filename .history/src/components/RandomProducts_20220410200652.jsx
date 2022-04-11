import React, { useEffect, useState } from 'react'
import { getProduct } from '../container/httpRequest'

const RandomProducts = () => {
    const [products, setProducts] = useState([])
    const collectionId =  ['1', '2', '3', '4', '5']

    const Products = async () => {
        const data = await getProduct()
        setProducts(data)
    }

    useEffect(() => {
        Products()
    }, [])

    // console.log(products);
    const ra = collectionId.map(id => {
        products.filter(el => el.collectionId === 'id )
        // console.log('h',randomProducts)
    })

    console.log(ra);
  return (
    <div>

    </div>
  )
}

export default RandomProducts