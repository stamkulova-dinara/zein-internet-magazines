import React, { useState} from 'react'
import ModalWindow from '../components/ModalWindow'

const BackCall = () => {
    const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal)
	}
  return (
    <div>
        {modal && (
        <ModalWindow clickModal={toggleModal}>

        </ModalWindow>)
}
    </div>
  )
}

export default BackCall