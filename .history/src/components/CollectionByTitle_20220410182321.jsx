import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import style from "../assets/styles/content.module.css";
import Card from './card/Card';
import FloatingBtn from './FloatingButton/FloatingBtn';

const CollectionByTitle = () => {
    const params = useParams()
    const [collectionByTitle, setCollectionByTitle] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const id = params.id

    const limitPerPage = 12;
    const pagesVisited = pageNumber * limitPerPage;

    const getCollectionById = async () => {
     const fetchData = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/products')
     const jsonData = await fetchData.json();
     setCollectionByTitle(jsonData)
      }
    
    useEffect(() => {
         getCollectionById()
     }, []) 

     const collectioProducts = collectionByTitle.filter(item => item.collectionId === id)

     const displayProd = collection
     .slice(pagesVisited, pagesVisited + limitPerPage)
     .map((el) => (
       <CollectionCard collection={el} key={el.id}/>
     ))
   
     const pageCount = Math.ceil(collection.length / limitPerPage);
   
     const changePage = ({ selected }) => {
       setPageNumber(selected);
     };
     
  return (
    <div className={style.content}>
    <div className={style.swiper_wrap}>
      {(collectioProducts) ? collectioProducts.map(el => (
            <Card product={el} key={el.id}/>
      )) : <div>Loading...</div>}
  </div>
  <FloatingBtn/>
  </div>
  )
}

export default CollectionByTitle