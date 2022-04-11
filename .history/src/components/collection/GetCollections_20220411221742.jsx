import React, { useState, useEffect } from "react";
import style from "../../assets/styles/collection.module.css";
import { Button } from "react-bootstrap";
import { getCollection } from "../../container/httpRequest";
import CollectionCard from "../card/CollectionCard";

const GetCollections = () => {
  const [collections, setCollections] = useState([]);
  const [limit, setLimit] = useState(4);

  const getCollections = async () => {
    const data = await getCollection();
    setCollections(data);
  };

  useEffect(() => {
    getCollections();
    console.log(collections);
  }, [limit]);

  return (
    <div className={style.content}>
      <div className={style.theme}>
        <h3>Коллекция</h3>
      </div>
      <div className={style.cards}>
        {(collections) ? collections.slice(0, limit).map((el) => (
            <CollectionCard collection={el} key={el.id}/>
          )) : <div>Loading...</div>}
      </div>
      <div id={style.btn}>
          <Button variant="dark" id={style.button_page} onClick={()=>setLimit(limit+4)}>
            Ещё
          </Button>{" "}
      </div>
    </div>
  );
};

export default GetCollections;
