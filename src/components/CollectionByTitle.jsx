import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "../assets/styles/content.module.css";
import { getProduct } from "../container/httpRequest";
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
    const fetchData = await getProduct();
    setCollectionByTitle(fetchData);
  };

  useEffect(() => {
    getCollectionById();
  }, []);

  const collectioProducts = collectionByTitle.filter(
    (item) => item.collectionId === id
  );

  const newProducts = collectionByTitle.filter((item) => item.status === "new");

  const displayProducts = collectioProducts
    .slice(pagesVisited, pagesVisited + limitPerPage)
    .map((el) => <Card product={el} key={el.id} />);

  const pageCount = Math.ceil(collectioProducts.length / limitPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className={style.content}>
      <div className={style.swiper_wrap}>{displayProducts}</div>
      <Pagination pageCount={pageCount} changePage={changePage} />
      <div className={style.new_clothes}>
        <h4>Новинки</h4>
        <div className={style.swiper_wrap}>
          {newProducts.slice(0, 5).map((el) => (
            <Similar product={el} key={el.id} />
          ))}
        </div>
      </div>
      <FloatingBtn />
    </section>
  );
};

export default CollectionByTitle;
