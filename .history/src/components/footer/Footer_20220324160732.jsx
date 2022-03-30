import React from 'react'
import style from './footer.module.css'
import logotipForFooter from '../../assets/icon/logo-footer.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
        {/* <div className={style.footer_main}> */}
            <div>
                <img src={logotipForFooter}/>
                <p>Developed by Zeon 2022</p>
            </div>
            <div>
                <h5>Компания</h5>
                <ul>
                    <li>О нас</li>
                    <li>Новости</li>
                    <li>Помощь</li>
                </ul>
            </div>
            <div>
            <h5>Контакты</h5>
                <ul>
                    <li>+996 500 123 456</li>
                    <li>+996 500 123 456</li>
                    <li>mail@gmail.com</li>
                </ul>
            </div>
            <div>
            <h5>Мы в социальных сетях:</h5>
                <ul>
                    <li>Instagram</li>
                    <li>Telegram</li>
                    <li>Whatsapp </li>
                </ul>
            </div>
        {/* </div> */}
    </footer>
  )
}

export default Footer