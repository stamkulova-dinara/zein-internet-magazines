import React from 'react'
import style from './footer.module.css'
import logotipForFooter from '../../assets/icon/logo-footer.png'
import { Link } from 'react-router-dom'
import insta

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.footer_main}>
            <div>
                <img src={logotipForFooter}/>
                <p>Developed by Zeon 2022</p>
            </div>
            <div className={style.box}>
                <h3>Компания</h3>
                <ul className={style.ul}>
                    <Link to={'/about'}>
                    <li>О нас</li>
                    </Link>
                    <Link to={'/news'}>
                    <li>Новости</li>
                    </Link>
                    {/* <Link> */}
                    <li>Помощь</li>
                    {/* </Link> */}
                </ul>
            </div>
            <div className={style.box}>
            <h3>Контакты</h3>
                <ul>
                    <li>+996 500 123 456</li>
                    <li>+996 500 123 456</li>
                    <li>mail@gmail.com</li>
                </ul>
            </div>
            <div>
            <h3>Мы в социальных сетях:</h3>
                <ul>
                <a href='https://www.instagram.com/zeon.ithub/' target='_blank'>
                    <li>
                        Instagram
                    </li>
                 </a>  
                 <a href='https://t.me/Zeonitcommunity' target='_blank'> 
                    <li>Telegram</li>
                </a>
                <a href='https://wa.me/+996999805099' target='_blank'>    
                    <li>Whatsapp </li>
                </a>   
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer