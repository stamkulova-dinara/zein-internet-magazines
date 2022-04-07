import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from '../assets/styles/collection.module.css'
import { Button } from 'react-bootstrap'; 
import { MdArrowForwardIos } from 'react-icons/md'
import { getCollection } from "../container/httpRequest";

const Collections = () => {
  const [ collection, setCollection] = useState([])

  const collectionData = async () => {
    // const fetchData = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection?p=1&l=8')
    const fetchData = await getCollection()
    // const jsonData = await fetchData.json()
    setCollection(fetchData)
    console.log(collection)
  }

  useEffect(() => {
    collectionData()
  }, [])

  return (
    <div className={style.content_collection}>
      Коллекции
      <div className={style.cards}>
        {(collection) ? collection.slice(0, 8).map(el => ()
            // <div className={style.collection} key={el.id}>
            //   <img src={el.image} className={style.collection_image}/>
            //   <div className={style.info}>
            //     <div className={style.card_title}>
            //   <p >{el.collection}</p>
            //   </div>
            //   <Link to={"/collections/" + el.id}>
            //   <Button id={style.button} variant="dark">Смотреть все <MdArrowForwardIos/></Button>{' '}
            //   </Link>
            //   </div>
            // </div>
          )) : <div>Loading...</div>}
      </div>
    </div>
  )
}


export default Collections;
