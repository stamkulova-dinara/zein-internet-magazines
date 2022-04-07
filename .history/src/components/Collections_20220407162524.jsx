import React, { useEffect, useState } from "react";
import style from '../assets/styles/collection.module.css'
import { getCollection } from "../container/httpRequest";
import CollectionCard from "./card/CollectionCard";

const Collections = () => {
  const [ collection, setCollection] = useState([])

  const collectionData = async () => {
    const fetchData = await getCollection()
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
        {(collection) ? collection.slice(0, 8).map(el => (
          <CollectionCard collection={el} key={el.id}/>
          )) : <div>Loading...</div>}
      </div>
    </div>
  )
}


export default Collections;
