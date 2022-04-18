import React, { useState } from "react";
import style from "../assets/styles/content.module.css";
import Card from "./card/Card";
import Pagination from "./pagiation/Pagination";
import RandomProducts from "./RandomProducts";

const SearchResult = ({ searchResult, searchValue }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const limitPerPage = 8;
  const pagesVisited = pageNumber * limitPerPage;

  console.log(searchResult);
  console.log(searchValue);

  const displayResult = searchResult
    .slice(pagesVisited, pagesVisited + limitPerPage)
    .map((el) => <Card product={el} key={el.id} />);

  const pageCount = Math.ceil(searchResult.length / limitPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={style.content}>
      <h4>Результаты поиска по запросу: {searchValue}</h4>
      {searchResult.length !== 0 ? (
        <>
          <div className={style.swipers}>{displayResult}</div>
          <Pagination pageCount={pageCount} changePage={changePage} />
        </>
      ) : (
        <>
          <div>По Вашему запросу ничего не найдено.</div>
          <RandomProducts />
        </>
      )}
    </div>
  );
};

export default SearchResult;
