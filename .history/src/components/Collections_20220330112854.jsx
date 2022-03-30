import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './collection.module.css'
import { Button, Pagination } from 'react-bootstrap'; 
import { MdArrowForwardIos } from 'react-icons/md'

const Collections = () => {
  const [state, setState] = useState({
    data: [],
    limit: 8,
    activePage: 1
  });

  useEffect(() => {
    fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections?page=1&limit=${state.limit}`)
      .then((json) => json.json())
      .then((res) => {
        setState((prev) => ({
          ...prev,
          data: res}))
        })
        .catch((error) => console.log(error));
  }, [state.limit]);

  const handlePageChange = (pageNumber) => {
    setState((prev) => ({ ...prev, activePage: pageNumber }));

    fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections?_page=${pageNumber}`)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          data: res.data
        }));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={style.content_collection}>
      Collections
      <div className={style.cards}>
        {state.data.map((el) => {
          return (
            <div className={style.collection}>
              <img src={el.image} className={style.collection_image}/>
              <div className={style.info}>
                <div className={style.card_title}>
              <p >{el.title}</p>
              </div>
              <Link to={"/collections/" + el.id}>
              <Button id={style.button} variant="dark">Смотреть все <MdArrowForwardIos/></Button>{' '}
              </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className={style.pagination}> */}
      <Pagination id={style.pagination}>
      <Pagination.Prev />
        {state.data.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === state.activePage}
              id={style.paginationItem}
            >
              {index + 1}
            </Pagination.Item>
          )
        })}
        <Pagination.Next />
      </Pagination>
      {/* </div> */}
    </div>
  )
}


export default Collections;
