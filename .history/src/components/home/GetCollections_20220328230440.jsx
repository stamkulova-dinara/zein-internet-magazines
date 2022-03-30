import React from 'react'
import style from './home.module.css'

const GetCollections = () => {
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