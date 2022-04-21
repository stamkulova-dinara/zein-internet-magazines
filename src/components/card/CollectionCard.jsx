import React from "react";
import style from "../../assets/styles/collection.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const CollectionCard = ({ collection }) => {
  return (
    <div className={style.collection}>
      <Link to={"/collections/" + collection.id}>
        <img src={collection.image} className={style.collection_image} />
        <div className={style.info}>
          <div className={style.card_title}>
            <p>{collection.collection}</p>
          </div>
          <button id={style.collection_button}>
            Смотреть все <MdArrowForwardIos />
          </button>{" "}
        </div>
      </Link>
    </div>
  );
};

export default CollectionCard;
