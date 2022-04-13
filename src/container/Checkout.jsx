import React, { useState } from "react";
import style from "../assets/styles/checkout.module.css";
import ModalWindow from "../components/modal/ModalWindow";
import close from "../assets/icon/close.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { postCheckout } from "./httpRequest";
import SuccessModal from "../components/SuccesModal/SuccessModal";

const Checkout = () => {
  const [modal, setModal] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async () => {
    let data = { name, surname, mail, phoneNumber, country, city };
    const fetchData = await postCheckout(data);
    console.log(fetchData);
    if (!fetchData.id) {
      setStateModal(false);
    }
    return setStateModal(true);
  };

  const handleInputchange = (val) => {
    if (val.target.name === "email") {
      if (
        val.target.value.match(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        )
      ) {
        setEmailError(false);
        setMail(val.target.value);
      } else {
        setEmailError(true);
        setMail(val.target.value);
      }
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button className={style.order_btn} onClick={toggleModal}>
        Оформить заказ
      </button>
      {modal && (
        <ModalWindow clickModal={toggleModal}>
          {!stateModal ? (
            <div className={style.modal_wrap}>
              <div className={style.modal_block}>
                <h5 id={style.modal_theme}>Оформление заказа</h5>
                <img src={close} onClick={toggleModal} className={style.icon} />
              </div>
              <div className={style.box_input}>
                <label>Ваше имя</label>
                <input
                  className={style.input}
                  placeholder="Например Иван"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={style.box_input}>
                <label>Ваше фамилия</label>
                <input
                  className={style.input}
                  placeholder="Например Иванов"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className={style.box_input}>
                {emailError ? (
                  <>
                    <label style={{ color: "red" }}>Электронная почта</label>
                    <input
                      className={style.input}
                      placeholder="example@mail.com"
                      type="email"
                      value={mail}
                      name="email"
                      style={{ border: "1px solid red" }}
                      onChange={(e) => handleInputchange(e)}
                    />
                  </>
                ) : (
                  <>
                    <label>Электронная почта</label>
                    <input
                      className={style.input}
                      placeholder="example@mail.com"
                      type="email"
                      value={mail}
                      name="email"
                      onChange={(e) => handleInputchange(e)}
                    />
                  </>
                )}
              </div>
              <div className={style.box_input}>
                <label>Ваш номер телефона</label>
                <input
                  placeholder="Введите номер телефона"
                  className={style.input}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className={style.box_input}>
                <label>Страна</label>
                <input
                  className={style.input}
                  placeholder="Введите страну"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className={style.box_input}>
                <label>Город</label>
                <input
                  className={style.input}
                  placeholder="Введите город"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className={style.box_check}>
                <input type="checkbox" className={style.check_box} />
                <h6>
                  Согласен с условиями{" "}
                  <Link to={"/offer"} style={{ color: "blue" }}>
                    публичной оферты
                  </Link>
                </h6>
              </div>
              <Button
                id={style.button}
                onClick={handleSubmit}
                variant="secondary"
              >
                Заказать
              </Button>{" "}
            </div>
          ) : (
            <SuccessModal closeModal={toggleModal} />
          )}
        </ModalWindow>
      )}
    </>
  );
};

export default Checkout;
