import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import style from "../../assets/styles/header.module.css";
import { getProduct } from "../../container/httpRequest";
import { BsFilterSquareFill } from "react-icons/bs";

const SearchInput = ({
  setSearchResult,
  setSearchValue
}) => {
  const [inputValue, setInputValue] = useState("");
  const [product, setProduct] = useState([])
  const [result, setResult] = useState(false)
  const [filter, setFilter] = useState([])

  const Product = async () => {
    const data = await getProduct()
    setProduct(data)
  }

  useEffect(() => {
    Product()
  }, [])

  const handleChange = (e) => {
    setInputValue(e.target.value)
    if (inputValue !== "") { 
    const newFilter = product.filter((item) => {
      return item.title.includes(inputValue)
    })
    setFilter(newFilter)
    setSearchResult(newFilter);
  }
  }

  const click = () => {
    setResult(true)
    setSearchValue(inputValue);
  }
  return (
    <div className={style.search_content}>
      <input placeholder="Поиск..." className={style.search} onChange={handleChange} />
      {(!result) ? (
        <div className={style.results}>
        {filter?.map(el=> (
          <Link to={`/collections/${el.collectionId}/product/` + el.id}>
          <p className={style.item_result} onClick={() => setResult(true)}>{el.title}</p>
          </Link>
        ))}
        </div>
      ) : null }
      <Link to={"/search"}>
        <button className={style.searchs_btn} onClick={click}>
          <BiSearch className={style.search_icon} />
        </button>
      </Link>
    </div>
  );
};

export default SearchInput;
