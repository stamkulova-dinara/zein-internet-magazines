import '../assets/styles/modal.module.css'

const ModalWindow =({children,clickModal})=>{
    const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal)
	}
    return(
        <div className={style.modal_wrap} onClick={clickModal}>
            <div className={style.modal_block} onClick={e=>e.stopPropagation()}>
             {children}
            </div>
        </div>
    )
}

export default ModalWindow;