import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import style from './collec.module.css'

const CollectionByTitle = () => {
    const params = useParams()
    const [collectionByTitle, setCollectionByTitle] = useState([])

    const getCollectionById = async () => {
        await fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/${params.id}`)
        .then(res=>res.json())
        .then(json=> setCollectionByTitle(json.data))
      }

     useEffect(() => {
         getCollectionById()
     }, []) 
  return (
    <div>
    <div className={style.card}>
    {collectionByTitle.map((el) => {
      return (
        <div className={style.cardItem}>
          {/* <div> */}
          <p className={style.sale}>{el.sale}%</p>
          {/* <img src={like} id={style.card_like_icon}/> */}
          <img src={el.image} className={style.photo}/>
          {/* </div> */}
          <div className={style.card_info}>
          <p id={style.title}>{el.title}</p>
          <h6>{el.price} p</h6>
          <p className={style.size}>Размер: {el.size}</p>
          <div className={style.product_color}>
          {el.color.map(e => (
            <div style={{backgroundColor: e, borderRadius: '50%', width: '8px', height: '8px', marginRight: '10px'}} id={style.product_color}></div>
          ))}
          </div>
          {/* <p className={style.sale}>{el.sale}%</p> */}
          </div>
        </div>
      )
    })}
  </div>
  </div>
  )
}

export default CollectionByTitle