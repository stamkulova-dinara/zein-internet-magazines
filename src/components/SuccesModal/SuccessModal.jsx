import React from "react";
import successIcon from "../../assets/icon/success.png";
import { Button } from "react-bootstrap";
import style from "./style.module.css";

const SuccessModal = ({ closeModal }) => {
  return (
    <div className={style.modal_wrap}>
      <img src={successIcon} className={style.success_icon}/>
      <h4>Спасибо!</h4>
      <p>Ваша заявка была принята ожидайте, скоро Вам перезвонят</p>
      <Button variant="dark" onClick={closeModal} id={style.btn}>
        Продолжить покупки
      </Button>
    </div>
  );
};

export default SuccessModal;
