import React, { useState} from 'react'
import ModalWindow from '../components/modal/ModalWindow'
import telephone2 from '../assets/icon/telephone2.png'
import style from '../assets/styles/backCall.module.css'
import close from '../assets/icon/close.png'
import { AiOutlineUser } from 'react-icons/ai'

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
                <div class>
                  <AiOutlineUser/>
                <input
                  placeholder='Как к Вам обращаться?'
                />
                </div>
            </div>
          </div>
        </ModalWindow>)
}
    </>
  )
}

export default BackCall