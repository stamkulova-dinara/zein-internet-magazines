import React, { useState} from 'react'
import ModalWindow from '../components/ModalWindow'

const BackCall = () => {
    const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal)
	}
  return (
    <div>
        <img src={telephone2} className={style.icons}/>
        {modal && (
        <ModalWindow clickModal={toggleModal}>

        </ModalWindow>)
}
    </div>
  )
}

export default BackCall