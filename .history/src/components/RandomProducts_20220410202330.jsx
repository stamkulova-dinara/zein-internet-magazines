import React, { useEffect, useState } from 'react'
import { getProduct } from '../container/httpRequest'
import Similar from './card/Similar'

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

    // const randomProducts = products[Math.floor(Math.random(5)*products.length)]
    // console.log('h',randomProducts)
  return (
    <div>
        {products.slice(0, 5).map(el => (
            <Similar product={el} key={el.id}/>
        ))}

    </div>
  )
}

export default RandomProducts