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

    // console.log(products);

    // const randomProducts = products.filter(el => el.collectionId === '7' )
    // console.log('h',randomProducts)

    const randomProducts = [products[Math.floor(Math.random(5)*products.length)]]
    console.log('h',randomProducts)
  return (
    <div>
        {/* {randomProducts.map(el => ( */}
            <Similar product={randomProducts} key={el.id}/>
        {/* ))} */}

    </div>
  )
}

export default RandomProducts