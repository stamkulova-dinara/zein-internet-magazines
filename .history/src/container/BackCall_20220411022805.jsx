import React from 'react'
import ModalWindow from '../components/ModalWindow'

const BackCall = () => {
    const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal)
	}
  return (
    <div>
        <ModalWindow clickModal={to}>

        </ModalWindow>
    </div>
  )
}

export default BackCall