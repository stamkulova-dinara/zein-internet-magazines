import React from 'react'
import style from "../assets/styles/content.module.css";
import Card from './card/Card';

const SearchResult = ({searchResult, searchValue}) => {
  console.log(searchResult)
  console.log(searchValue);
  return (
    <div className={style.content}>
     <h4></h4> {searchValue}
    <div className={style.swiper_wrap}>
      {(searchResult.length !== 0) ? searchResult.map(el => (
        <Card product={el} key={el.id}/>
      )) : <h1>Ничего не найдено</h1>}
  </div>
</div>
  )
}

export default SearchResult