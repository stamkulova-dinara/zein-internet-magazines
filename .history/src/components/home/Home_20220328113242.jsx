import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import CaroselComponent from './Carosel';
import like from '../../assets/icon/like.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [dress, setDress] = useState([])
  const [newClothes, setNewClothes] = useState([])
  const [collections, setColle] = useState([])

  const getHitProdaj = async () => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/10')
    const jsonData = await data.json()
    setDress(jsonData.data)
  }

  const getNewClothes = async () => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/9')
    const jsonData = await data.json()
    setNewClothes(jsonData.data)
  }

  const getCollections = async () => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collections?page=1&limit=4')
    const jsonData = await data.json()
    setNewClothes(jsonData)
  }

  useEffect(() => {
    getHitProdaj()
    getNewClothes()
  }, [])

  return (
    <div className={style.content}>
      <CaroselComponent/>
    <div>
      <div className={style.theme}>
        <h3>Хит продаж</h3>
      </div>
    <div className={style.card}>
      {dress.map((el) => {
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
    <div className={style.btn}>
      <Link to={'/collections/10'}>
      <Button variant="dark">Ещё</Button>{' '}
      </Link>
    </div>
    <div className={style.theme}>
        <h3>Новинки</h3>
      </div>
    <div className={style.card}>
      {newClothes.map((el) => {
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
    <div className={style.btn}>
      <Link to={'/collections/9'}>
      <Button variant="dark">Ещё</Button>{' '}
      </Link>
    </div>
    <div className={style.cards}>
        {state.data.map((el) => {
          return (
            <div className={style.collection}>
              <img src={el.image} className={style.collection_image}/>
              <div className={style.info}>
                <div className={style.card_title}>
              <p >{el.title}</p>
              </div>
              <Link to={"/collections/" + el.id}>
              <Button id={style.button} variant="dark">Смотреть все <MdArrowForwardIos/></Button>{' '}
              </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
    </div>
  )
}

export default Home