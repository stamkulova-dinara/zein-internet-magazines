import React, { useState, useEffect } from "react";
import style from "../assets/styles/collection.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCollection } from "../container/httpRequest";
import CollectionCard from "./card/CollectionCard";

const GetCollections = () => {
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    const data = await getCollection();
    setCollections(data);
  };

  useEffect(() => {
    getCollections();
    console.log(collections);
  }, []);

  return (
    <div className={style.content}>
      <div className={style.theme}>
        <h3>Коллекция</h3>
      </div>
      <div className={style.cards_collection}>
        {(collections) ? collections.slice(0, 4).map((el) => (
            <CollectionCard collection={el} key={el.id}/>
          )) : <div>Loading...</div>}
      </div>
      <div id={style.btn}>
        <Link to={"/collections"}>
          <Button variant="dark" id={style.button_page}>
            Ещё
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default GetCollections;
