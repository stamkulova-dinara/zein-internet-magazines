import '../assets/styles/modal.module.css'

const ModalWindow =({children,clickModal})=>{
    return(
        <div className={style.modal_wrap} onClick={clickModal}>
            <div className={style.modalblock" onClick={e=>e.stopPropagation()}>
             {children}
            </div>
        </div>
    )
}

export default ModalWindow;