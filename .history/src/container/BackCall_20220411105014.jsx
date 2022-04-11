import React, { useState} from 'react'
import ModalWindow from '../components/modal/ModalWindow'
import telephone2 from '../assets/icon/telephone2.png'
import style from '../assets/styles/backCall.module.css'

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
          <div>
                <h4>Если у Вас остались вопросы</h4>
                <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
                </div>
        </ModalWindow>)
}
    </>
  )
}

export default BackCall