import React from 'react'
import style from './footer.module.css'
import logotipForFooter from '../../assets/icon/logo-footer.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div>
            <div>
                <img src={logotipForFooter}/>
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
            <h5>Компания</h5>
                <ul>
                    <li>О нас</li>
                    <li>Новости</li>
                    <li>Помощь</li>
                </ul>
            </div>
            <div>
            <h5>Мы в социальных сетях:</h5>
                <ul>
                    <li>Instagram</li>
                    <li>Новости</li>
                    <li>Помощь</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer