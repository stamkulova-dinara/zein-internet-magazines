import React, { useState } from "react";
import ModalWindow from "../components/modal/ModalWindow";
import telephone2 from "../assets/icon/telephone2.png";
import style from "../assets/styles/backCall.module.css";
import close from "../assets/icon/close.png";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { postCallBack } from "./httpRequest";
import SuccessModal from "../components/SuccesModal/SuccessModal";

const BackCall = () => {
  const [modal, setModal] = useState(false);
  const [stateBtn, setStateBtn] = useState(true);
  const [stateModal, setStateModal] = useState(false);
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (val) => {
    if (val.target.name === "name") {
      setState({ ...state, name: val.target.value });
    }
    if (val.target.name === "phone") {
      setState({ ...state, number: val.target.value });
      setStateBtn(false);
    }
  };

  console.log(state);

  const handleSubmit = async () => {
    const res = await postCallBack(state);
    console.log(res);
    if (!res.id) {
      setStateModal(false);
    }
    return setStateModal(true);
  };

  return (
    <>
      <img src={telephone2} onClick={toggleModal} className={style.icons} />
      {modal && (
        <ModalWindow clickModal={toggleModal}>
          {!stateModal ? (
            <div className={style.modal_wrap}>
              <img src={close} onClick={toggleModal} />
              <div className={style.modal_block}>
                <div className={style.theme}>Если у Вас остались вопросы</div>
                <p>Оставьте заявку и мы обязательно Вам перезвоним</p>
                <div className={style.inputs}>
                  <AiOutlineUser className={style.icon} />
                  <input
                    placeholder="Как к Вам обращаться?"
                    className={style.input}
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className={style.inputs}>
                  <BsTelephone className={style.icon} />
                  <input
                    placeholder="Номер телефона"
                    className={style.input}
                    name="phone"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <Button
                  onClick={handleSubmit}
                  disabled={stateBtn}
                  id={style.button}
                >
                  Заказать звонок
                </Button>{" "}
              </div>
            </div>
          ) : (
            <SuccessModal closeModal={toggleModal} />
          )}
        </ModalWindow>
      )}
    </>
  );
};

export default BackCall;
