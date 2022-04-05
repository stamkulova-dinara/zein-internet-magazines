import React from 'react'

const SearchResult = () => {
  return (
    <div>
      <h6>Результаты поиска по запросу: {props.search}</h6>
    </div>
  )
}

export default SearchResult