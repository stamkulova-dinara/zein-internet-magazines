import React, { useState, useEffect} from 'react'
import style from '../../assets/getCollections.module.css'
import like from '../../assets/icon/like.png'
import { MdArrowForwardIos } from 'react-icons/md'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetCollections = () => {
    const [collections, setCollections] = useState([])

    const getCollections = async () => {
        const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collections?page=1&limit=4')
        const jsonData = await data.json()
        setCollections(jsonData)
      }

    useEffect(() => {
        getCollections()
    }, [])
  return (
    <div>
         <div className={style.theme}>
        <h3>Коллекция</h3>
      </div>
    <div id={style.cardsCollection}>
        {collections.map((el) => {
          return (
            <div className={style.collection}>
              <Link to={"/collections/" + el.id}>
              <img src={el.image} className={style.collection_image}/>
              <div className={style.info}>
                <div className={style.card_title}>
              <p>{el.title}</p>
              </div>
              <Button id={style.button} variant="dark">Смотреть все <MdArrowForwardIos/></Button>{' '}
              </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={style.btn}>
      <Link to={'/collections'}>
      <Button variant="dark">Ещё</Button>{' '}
      </Link>
    </div>
    </div>
  )
}

export default GetCollections