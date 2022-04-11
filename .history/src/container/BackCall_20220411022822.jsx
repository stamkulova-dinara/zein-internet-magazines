import React, { use} from 'react'
import ModalWindow from '../components/ModalWindow'

const BackCall = () => {
    const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal)
	}
  return (
    <div>
        <ModalWindow clickModal={toggleModal}>

        </ModalWindow>
    </div>
  )
}

export default BackCall