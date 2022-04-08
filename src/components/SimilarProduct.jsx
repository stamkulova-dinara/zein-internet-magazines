import React, {useEffect, useState} from 'react'
import style from "../assets/styles/content.module.css";
import Card from './card/Card';

const SimilarProduct = ({id}) => {
    const [similar, setSimilar] = useState([])

    const getCollectionById = async () => {
        const fetchData = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/products')
        const jsonData = await fetchData.json();
        setSimilar(jsonData)
         }
       
       useEffect(() => {
            getCollectionById()
        }, []) 
   
        const similarProducts = similar.filter(item => item.collectionId === id)
  return (
    <div>
        <h4>Похожие товары</h4>
    <div className={style.swiper_wrap}>
      {(similarProducts) ? similarProducts.slice(0,5).map(el => (
            <Card product={el} key={el.id}/>
      )) : <div>Loading...</div>}
  </div>

  </div>
  )
}

export default SimilarProduct