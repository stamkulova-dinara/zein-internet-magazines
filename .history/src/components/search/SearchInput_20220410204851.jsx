import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi'
import style from "../../assets/styles/header.module.css";

const SearchInput = ({setSearchResult, searchResult, setSearchValue, searchValue}) => {
    const [inputValue, setInputValue] = useState("");

    const valu = (e) => {
      setInputValue(e.target.value)
    }

    const handleChange = async (e) => {
        const fetchData = await fetch(
          `https://623c10012e056d1037f94796.mockapi.io/api/v1/products?title=${inputValue}`
        );
        const JsonData = await fetchData.json();
          setSearchResult(JsonData)
          setSearchValue(inputValue)
          console.log('head', searchResult)
          setInputValue('')
      }
  return (
    <div className={style.search_content}>
        <input
          placeholder="Поиск..."
          className={style.search}
          onChange={valu}
        />
        {/* <div className={style.results}>
        {searchResult.map(el=> (
          <p className={style.item_result}>{el.title}</p>
        ))}
        </div> */}
          <Link to={"/search"}>
            <button className={style.searchs_btn} onClick={handleChange}>
            <BiSearch className={style.search_icon}/>
            </button>
          </Link>
    </div>
  )
}

export default SearchInput