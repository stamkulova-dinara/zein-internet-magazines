import React from 'react'
import style from "../assets/styles/content.module.css";
import Card from './card/Card';

const SearchResult = ({searchResult, searchValue}) => {
  console.log(searchResult)
  console.log(searchValue);
  return (
    <div className={style.content}>
     <h4>Результаты поиска по запросу: {searchValue}</h4>
     {searchResult.length !== 0 ? 
    <div className={style.swiper_wrap}>
      {searchResult.map(el => (
        <Card product={el} key={el.id}/>
      ))}
       </div> : (
         <>
           <div>По Вашему запросу ничего не найдено.</div> 
           
           </>
      )
      }
</div>
  )
}

export default SearchResult