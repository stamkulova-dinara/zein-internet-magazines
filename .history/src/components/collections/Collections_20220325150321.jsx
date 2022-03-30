import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './collection.module.css'

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("https://623c10012e056d1037f94796.mockapi.io/api/v1/collections")
      .then((res) => res.json())
      .then((json) => setCollections(json));
  }, []);
  return (
    <div>
      Collections
      <div className={style.cards}>
        {collections.map((el) => {
          return (
            <div className={style.collection}>
              <img src={el.image} className={style.collection_image}/>
              <p>{el.title}</p>
              <Link to={"/collections/" + el.id}>
              <Button variant="dark">Смотреть все</Button>{' '}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
