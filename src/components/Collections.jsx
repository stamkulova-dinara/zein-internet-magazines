import React, { useEffect, useState } from "react";
import style from "../assets/styles/collection.module.css";
import { getCollection } from "../container/httpRequest";
import CollectionCard from "./card/CollectionCard";
import FloatingBtn from "./FloatingButton/FloatingBtn";
import Pagination from "./pagiation/Pagination";

const Collections = () => {
  const [collection, setCollection] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const limitPerPage = 8;
  const pagesVisited = pageNumber * limitPerPage;

  const collectionData = async () => {
    const fetchData = await getCollection();
    setCollection(fetchData);
  };

  useEffect(() => {
    collectionData();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, []);

  const displayCollection = collection
    .slice(pagesVisited, pagesVisited + limitPerPage)
    .map((el) => <CollectionCard collection={el} key={el.id} />);

  const pageCount = Math.ceil(collection.length / limitPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={style.content_collection}>
      <h4 className={style.collection_theme}>Коллекции</h4>
      <div className={style.cards}>{displayCollection}</div>
      <Pagination pageCount={pageCount} changePage={changePage} />
      <FloatingBtn />
    </div>
  );
};

export default Collections;
