import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { BiSearch } from "react-icons/bi";
import style from "./searchInput.module.css";
import { getProduct, getSearchProduct } from "../../container/httpRequest";

const SearchInput = ({
  setSearchResult,
  setSearchValue,
  onClick
}) => {
  const [inputValue, setInputValue] = useState("");
  const [product, setProduct] = useState([])
  const [result, setResult] = useState(false)
  const [filter, setFilter] = useState([])
  let navigate = useNavigate()

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

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      click();
    }
  }

  const click = () => {
    setResult(true)
    setSearchValue(inputValue);
    setInputValue("")
    navigate(`/search`)
  }

  return (
    <div className={style.search_content}>
      <input placeholder="Поиск..." className={style.search} onChange={handleChange} onKeyDown={onKeyDown}/>
      {(!result) ? (
        <div className={style.results}>
        {filter?.map(el=> (
          <Link to={`/collections/${el.collectionId}/product/` + el.id} onClick={onClick}>
          <p className={style.item_result} onClick={() => setResult(true)}>{el.title}</p>
          </Link>
        ))}
        </div>
      ) : null }
      {/* <Link to={"/search"}> */}
        <button className={style.searchs_btn} onClick={click} >
          <BiSearch className={style.search_icon} />
        </button>
      {/* </Link> */}
    </div>
  );
};

export default SearchInput;
