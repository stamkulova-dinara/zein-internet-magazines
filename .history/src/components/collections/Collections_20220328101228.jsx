import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './collection.module.css'
import { Button, Pagination } from 'react-bootstrap'; 
import { MdArrowForwardIos } from 'react-icons/md'

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [state, setState] = useState({
    data: [],
    limit: 8,
    activePage: 1
  });

  useEffect(() => {
    fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections?_page=1&_limit=${state.limit}`)
      .then((json) => json.json())
      .then((res) => {
        setState((prev) => ({
          ...prev,
          data: res
        }));
  }, [sta]);
  return (
    <div className={style.content_collection}>
      Collections
      <div className={style.cards}>
        {collections.map((el) => {
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
    </div>
  );
};

export default Collections;
