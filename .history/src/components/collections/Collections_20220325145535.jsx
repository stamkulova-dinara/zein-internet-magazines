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
      <div>
        {collections.map((el) => {
          return (
            <div className={style.cardItem_collection}>
              <img src={el.image} />
              <Link to={"/collections/" + el.id}>
                <button>{el.title}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
