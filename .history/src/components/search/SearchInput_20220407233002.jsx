import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import style from "../../assets/styles/header.module.css";

const SearchInput = ({setSearchResult, searchResult, setSearchValue, searchValue}) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = async (e) => {
        setInputValue(e.target.value)
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
    <>
        <input
          placeholder="Поиск..."
          className={style.search}
          value={inputValue}
          onChange={handleChange}
          // onChange={e => setInputValue(e.target.value)}
        />
        <div id={style.search_btn} onClick={handleChange}>
          <Link to={"/search"}>
            <BiSearch className={style.search_icon}/>
          </Link>
        </div>
        {}

    </>
  )
}

export default SearchInput