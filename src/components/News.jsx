import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from '../assets/styles/news.module.css'
import FloatingBtn from './FloatingButton/FloatingBtn'

const News = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(8)
  const [fetching, setfetching] = useState(true)

  const scrollHandler = (e) => {
    if( e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setfetching(true)
    }
  }

  useEffect(() => {
    if (fetching) {
      axios.get(`https://623c10012e056d1037f94796.mockapi.io/api/v1/news?p=1&l=${currentPage}`)
      .then(response =>  {
        setData([...data,...response.data])
      setCurrentPage(prev => prev + 8)
      })
      .finally(() => setfetching(false))
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    
    return function () {
      document.removeEventListener('scroll', scrollHandler)
  }
  }, [])
  return (
      <div className={style.news_content}>
        {data.map(el => (
          <div className={style.card_news} key={el.id}>
            <img src={el.image}  className={style.image_news}/>
            <div className={style.info_news}>
              <h6>{el.title},{el.id}</h6>
              <p>{el.description}</p>
            </div>
          </div>
        ))}
        <FloatingBtn/>
      </div>
  )
}

export default News