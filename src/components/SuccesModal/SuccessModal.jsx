import React from "react";
import successIcon from "../../assets/icon/success.png";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const SuccessModal = ({ closeModal }) => {

  const click = () => {
    localStorage.removeItem('basket');
    closeModal()
  }
  return (
    <div className={style.modal_wrap}>
      <img src={successIcon} className={style.success_icon}/>
      <h4>Спасибо!</h4>
      <p>Ваша заявка была принята ожидайте, скоро Вам перезвонят</p>
      <Link to={'/'}>
      <button variant="dark" onClick={click} id={style.btn}>
        Продолжить покупки
      </button>
      </Link>
    </div>
  );
};

export default SuccessModal;
