import React from 'react'

const CollectionCard = ({collection}) => {
  return (
    <div>
        <div className={style.collection} key={el.id}>
               <Link to={'/collections/' + collection.id}>
              <img src={el.image} className={style.collection_image} />
              <div className={style.info}>
                <div className={style.card_title}>
                  <p>{el.collection}</p>
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