import React, { useState} from 'react'
import ModalWindow from '../components/modal/ModalWindow'
import telephone2 from '../assets/icon/telephone2.png'
import style from '../'

const BackCall = () => {
    const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal)
	}
  return (
    <>
        <img src={telephone2} onClick={toggleModal}/>
        {modal && (
        <ModalWindow clickModal={toggleModal}>
                <h4>Если у Вас остались вопросы</h4>
                <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
        </ModalWindow>)
}
    </>
  )
}

export default BackCall