import React, { useState} from 'react'
import ModalWindow from '../components/modal/ModalWindow'
import telephone2 from '../assets/icon/telephone2.png'
import style from '../assets/styles/backCall.module.css'
import close from '../assets/icon/close.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { Button } from 'react-bootstrap'

const BackCall = () => {
    const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal)
	}
  return (
    <>
        <img src={telephone2} onClick={toggleModal} className={style.icons}/>
        {modal && (
        <ModalWindow clickModal={toggleModal}>
          <div className={style.modal_wrap}>
            <img src={close} onClick={toggleModal}/>
            <div className={style.modal_block}>
                <div className={style.theme}>Если у Вас остались вопросы</div>
                <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
                <div className={style.inputs}>
                  <AiOutlineUser className={style.icon}/>
                <input
                  placeholder='Как к Вам обращаться?'
                  className={style.input}
                />
                </div>
                <div className={style.inputs}>
                  <BsTelephone className={style.icon}/>
                <input
                  placeholder='Номер телефона'
                  className={style.input}
                />
                </div>
                <Button variant="secondary" id={style.button}>Заказать звонок
                </Button>{' '}
            </div>
          </div>
        </ModalWindow>)
}
    </>
  )
}

export default BackCall