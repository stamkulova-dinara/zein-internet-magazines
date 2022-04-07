import React, { useState, useEffect } from "react";
import style from "../assets/styles/collection.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCollection } from "../container/httpRequest";

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
        {collections ? (
          collections.slice(0, 4).map((el) => (
            // <div className={style.collection} key={el.id}>
            //    <Link to={'/collections/' + el.id}>
            //   <img src={el.image} className={style.collection_image} />
            //   <div className={style.info}>
            //     <div className={style.card_title}>
            //       <p>{el.collection}</p>
            //     </div>
            //       <Button id={style.button} variant="dark">
            //         Смотреть все <MdArrowForwardIos />
            //       </Button>{" "}
            //   </div>
            //   </Link>
            // </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
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
