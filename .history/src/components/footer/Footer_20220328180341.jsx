import React from 'react'
import style from './footer.module.css'
import logotipForFooter from '../../assets/icon/logo-footer.png'
import { Link } from 'react-router-dom'
import instagramIcon from '../../assets/icon/instagram.png'
import telegramIcon from '../../assets/icon/telegram.png'
import whatsappIcon from '../../assets/icon/whatsapp.png'
import phoneIcon from '../../assets/icon/phone.png'
import emailIcon from '../../assets/icon/email.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.footer_main}>
            <div>
                <img src={logotipForFooter}/>
                <p>Developed by Zeon 2022</p>
            </div>
            <div className={style.box}>
                <h5>Компания</h5>
                <ul className={style.ul}>
                    <Link to={'/about'}>
                    <li>О нас</li>
                    </Link>
                    <Link to={'/news'}>
                    <li>Новости</li>
                    </Link>
                    <Link to={'/help'}>
                    <li>Помощь</li>
                    </Link>
                </ul>
            </div>
            <div className={style.box}>
            <h5>Контакты</h5>
                <ul>
                    <li>
                    <a href="tel:+74951234567">
                    <img src={phoneIcon} className={style.icon_footer}/>
                     +996 500 123 456
                     </a>
                        </li>
                    <li>
                    <a href="tel:+74951234567">
                    <img src={phoneIcon} className={style.icon_footer}/>
                        +996 500 123 456
                        </a>
                        </li>

                    <li>
                        <a href='mailto:someone@yoursite.com' style={{color: 'white'}}>
                    <img src={emailIcon} className={style.icon_footer}/>
                        mail@gmail.com
                        </a>
                        </li>
                </ul>
            </div>
            <div>
            <h5>Мы в социальных сетях:</h5>
                <ul>
                <a href='https://www.instagram.com/zeon.ithub/' target='_blank'>
                    <li>
                        <img src={instagramIcon} className={style.icon_footer}/>
                        Instagram
                    </li>
                 </a>  
                 <a href='https://t.me/Zeonitcommunity' target='_blank'> 
                    <li>
                    <img src={telegramIcon} className={style.icon_footer}/>
                        Telegram
                        </li>
                </a>
                <a href='https://wa.me/+996999805099' target='_blank'>   
                    <li>
                    <img src={whatsappIcon} className={style.icon_footer}/>
                        Whatsapp
                         </li>
                </a>   
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer