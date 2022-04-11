import React from 'react'
import style from "../../assets/styles/collection.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CollectionCard = ({collection}) => {
  return (
    // <div>
        <div className={style.collection}>
               <Link to={'/collections/' + collection.id}>
              <img src={collection.image} className={style.collection_image} />
              <div className={style.info}>
                <div className={style.card_title}>
                  <p>{collection.collection}</p>
                </div>
                  <Button id={style.button} variant="dark">
                    Смотреть все <MdArrowForwardIos />
                  </Button>{" "}
              </div>
              </Link>
            </div>
    </div>
  )
}

export default CollectionCard