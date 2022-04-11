import '../assets/'

const ModalWindow =({children,clickModal})=>{
    return(
        <div className="modal-wrap" onClick={clickModal}>
            <div className="modal-block" onClick={e=>e.stopPropagation()}>
             {children}
            </div>
        </div>
    )
}

export default ModalWindow;