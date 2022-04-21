import React, { useState, useEffect } from "react";
import ModalWindow from "../../components/modal/ModalWindow";
import telephone2 from "../../assets/icon/telephone2.png";
import style from "./backCall.module.css";
import close from "../../assets/icon/close.png";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { postCallBack } from "../httpRequest";
import SuccessModal from "../../components/SuccesModal/SuccessModal";
import { Button } from "react-bootstrap";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BackCall = () => {
  const [modal, setModal] = useState(false);
  const [stateBtn, setStateBtn] = useState(true);
  const [stateModal, setStateModal] = useState(false);
  const [state, setState] = useState({
    name: "",
    number: "",
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      number: 0
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      number: Yup.number().required().min(18),
    }),
    onSubmit: async (values) => {
      const res = await postCallBack(values);
    console.log(res);
    if (!res.id) {
      setStateModal(false);
    }
    return setStateModal(true);
  }});

  const toggleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    if (
      formik.values.name &&
      formik.values.number 
    ) {
      setStateBtn(false);
    }
  }, [
    formik.values.name &&
    formik.values.number 
  ]);

  return (
    <>
      <img src={telephone2} onClick={toggleModal} className={style.icons} />
      {modal && (
        <ModalWindow clickModal={toggleModal}>
          {!stateModal ? (
            <div className={style.modal_wrap}>
              <img src={close} onClick={toggleModal} className={style.close_img}/>
              <div className={style.modal_block}>
                <h3 id={style.theme}>Если у Вас остались вопросы</h3>
                <p className={style.text}>Оставьте заявку и мы обязательно Вам перезвоним</p>
                <form onSubmit={formik.handleSubmit}>
                <div className={style.inputs}>
                  <AiOutlineUser className={style.icon} />
                  <input
                    placeholder="Как к Вам обращаться?"
                    className={style.input}
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>
                <div className={style.inputs}>
                  <BsTelephone className={style.icon} />
                  <input
                    placeholder="Номер телефона"
                    className={style.input}
                    name="number"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={stateBtn}
                  variant={stateBtn ? "secondary" : "dark"}
                  id={style.button}
                >
                  Заказать звонок
                </Button>{" "}
                </form>
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
