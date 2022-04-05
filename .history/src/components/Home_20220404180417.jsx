import React, { useEffect, useState } from 'react'
import style from '../assets/styles/home.module.css'
import CaroselComponent from './Carousel';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Advantages from './Advantages';
import GetCollections from '../container/GetCollections';
import NewClothes from './NewClothes';
import Hit from './Hit';
import FloatingBtn from './FloatingBtn';

const Home = () => {
  return (
    <div className={style.content}>
      <CaroselComponent/>
    <div>
      <div className={style.theme}>
        <h3>Хит продаж</h3>
      </div>
      <Hit/>
    <div className={style.btn}>
      <Link to={'/collections/10'}>
      <Button variant="dark">Ещё</Button>{' '}
      </Link>
    </div>
    <div className={style.theme}>
        <h3>Новинки</h3>
      </div>
      <NewClothes/>
    <div className={style.btn}>
      <Link to={'/collections/9'}>
      <Button variant="dark">Ещё</Button>{' '}
      </Link>
    </div>
    <GetCollections/>
    <div className={style.theme}>
            <h3>Наши преимущества</h3>
        </div>
    <Advantages/>
    <FloatingBtn/>

    </div>
    </div>
  )
}

export default Home