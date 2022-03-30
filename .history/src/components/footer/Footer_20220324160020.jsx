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
                <h5>height: 20px;
width: 87px;
left: 0px;
top: 0px;
border-radius: nullpx;
</h5>
            </div>
            <div></div>
            <div></div>
        </div>
    </footer>
  )
}

export default Footer