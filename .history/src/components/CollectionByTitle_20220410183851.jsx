import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "../assets/styles/content.module.css";
import Card from "./card/Card";
import Similar from "./card/Similar";
import FloatingBtn from "./FloatingButton/FloatingBtn";
import Pagination from "./pagiation/Pagination";

const CollectionByTitle = () => {
  const params = useParams();
  const [collectionByTitle, setCollectionByTitle] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const id = params.id;

  const limitPerPage = 12;
  const pagesVisited = pageNumber * limitPerPage;

  const getCollectionById = async () => {
    const fetchData = await fetch(
      "https://623c10012e056d1037f94796.mockapi.io/api/v1/products"
    );
    const jsonData = await fetchData.json();
    setCollectionByTitle(jsonData);
  };

  useEffect(() => {
    getCollectionById();
  }, []);

  const collectioProducts = collectionByTitle.filter(
    (item) => item.collectionId === id
  );

  const newProducts = collectionByTitle.filter(
    (item) => item.status === 'new'
  );

  console.log(newProducts)

  const displayProducts = collectioProducts
    .slice(pagesVisited, pagesVisited + limitPerPage)
    .map((el) => <Card product={el} key={el.id} />);

  const pageCount = Math.ceil(collectioProducts.length / limitPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={style.content}>
      <div className={style.swiper_wrap}>{displayProducts}</div>
      <Pagination pageCount={pageCount} changePage={changePage} />
      <div>
        <h4>Новинки</h4>
        <div className={style.swi}>
        {newProducts.slice(0, 5).map(el => (
          <Similar product={el} key={el.id}/>
        ))}
        </div>
      </div>
      <FloatingBtn />
    </div>
  );
};

export default CollectionByTitle;
