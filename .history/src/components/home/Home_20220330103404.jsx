import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import CaroselComponent from './Carosel';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Advantages from './Advantages';
import GetCollections from './GetCollections';

const Home = () => {
  const [dress, setDress] = useState([])
  const [newClothes, setNewClothes] = useState([])

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

  const getClothes = async () => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection/1')
    const jsonData = await data.json()
    setNewClothes(jsonData)
    console.log(newClothes)
  }

  useEffect(() => {
    getHitProdaj()
    // getClothes()
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
            {/* <p className={style.sale}>{el.sale}%</p> */}
            {/* <img src={like} id={style.card_like_icon}/> */}
            <Link to={'/product/' + el.productId}>
            <img src={el.image} className={style.photo}/>
            </Link>
            <div className={style.sale}>
            <p className={style.sale_num}>{el.sale}%</p>
            </div>
            {/* </div> */}
            <div className={style.card_info}>
            <p id={style.title}>{el.title}</p>
            <h6>{el.price} p <span className={style.old_price}>{el.oldPrice} c.</span></h6>
            <p className={style.size}>Размер: {el.size}</p>
            <div className={style.product_color}>
            {el.color.map(e => (
              <div style={{backgroundColor: e, borderRadius: '50%', width: '8px', height: '8px', marginRight: '10px'}} id={style.product_color}></div>
            ))}
            </div>
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
            <img src={el.image} className={style.photo}/>
            <div className={style.card_info}>
            <p id={style.title}>{el.title}</p>
            <h6>{el.price} p  <span className={style.old_price}>{el.oldPrice} c.</span></h6>
            <p className={style.size}>Размер: {el.size}</p>
            <div className={style.product_color}>
            {el.color.map(e => (
              <div style={{backgroundColor: e, borderRadius: '50%', width: '8px', height: '8px', marginRight: '10px'}} id={style.product_color}></div>
            ))}
            </div>
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
    <GetCollections/>
    <Advantages/>

    </div>
    </div>
  )
}

export default Home