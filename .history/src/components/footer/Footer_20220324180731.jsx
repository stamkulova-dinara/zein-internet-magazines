import React from 'react'
import style from './footer.module.css'
import logotipForFooter from '../../assets/icon/logo-footer.png'

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
                    <li>О нас</li>
                    <li>Новости</li>
                    <li>Помощь</li>
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
                <a>
                <a href='https://www.instagram.com/stamkulova_d_/' target='_blank'>
                    <li>
                        Instagram
                    </li>
                 </a>  
                 <a href='https://www.instagram.com/stamkulova_d_/' target='_blank'> 
                    <li>Telegram</li>
                </a>
                <a href='https://www.instagram.com/stamkulova_d_/' target='_blank'>    
                    <li>Whatsapp </li>
                    
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer