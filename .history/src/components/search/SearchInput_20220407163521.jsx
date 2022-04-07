import React from 'react'

const SearchInput = () => {
    
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