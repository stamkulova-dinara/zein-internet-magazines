import React from 'react'

const SearchInput = () => {
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
      }
  return (
    <div>
        <input
          placeholder="Поиск..."
          className={style.search}
          value={inputValue}
          onChange={handleChange}
          // onClick={searching}
        />
        <div id={style.search_btn}>
          <Link to={"/search"}>
            <BiSearch className={style.search_icon}/>
          </Link>
        </div>
    </div>
  )
}

export default SearchInput