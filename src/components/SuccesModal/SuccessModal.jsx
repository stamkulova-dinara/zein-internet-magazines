import React from "react";
import successIcon from "../../assets/icon/success.png";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SuccessModal = ({ closeModal }) => {

  // const click = () => {
  //   closeModal()
  // }
  return (
    <div className={style.modal_wrap}>
      <img src={successIcon} className={style.success_icon}/>
      <h4>Спасибо!</h4>
      <p>Ваша заявка была принята ожидайте, скоро Вам перезвонят</p>
      <Link to={'/'}>
      <Button variant="dark" onClick={closeModal} id={style.btn}>
        Продолжить покупки
      </Button>
      </Link>
    </div>
  );
};

export default SuccessModal;
