import React, { useEffect, useState } from "react";
import style from "./checkout.module.css";
import ModalWindow from "../../components/modal/ModalWindow";
import close from "../../assets/icon/close.png";
import { Link } from "react-router-dom";
import { postCheckout } from "../httpRequest";
import SuccessModal from "../../components/SuccesModal/SuccessModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from 'react-bootstrap'

const Checkout = ({ price, sale, totalPayable, product, allProduct }) => {
  const [modal, setModal] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [stateBtn, setStateBtn] = useState(true);
  const title = product?.map((el) => el.title);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      city: "",
      checked: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      checked: Yup.boolean().oneOf([true], 'Cначала вы должны принять публичную оферту'),
    }),
    onSubmit: async (values) => {
      const item = {
        contact: values,
        products: title,
        price: price,
        sale: sale,
        totalPayable: totalPayable,
        prodThing: allProduct,
      };
      const data = await postCheckout(item);
      if (!data.id) {
        setStateModal(false);
      }
      return setStateModal(true);
    },
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const removeLocalStorage = () => {
    localStorage.removeItem('basket');
    setModal(false)
  }

  useEffect(() => {
    if (
      formik.values.firstName &&
      formik.values.lastName &&
      formik.values.email &&
      formik.values.phoneNumber &&
      formik.values.country &&
      formik.values.city &&
      formik.values.checked
    ) {
      setStateBtn(false);
    }
  }, [
    formik.values.firstName,
    formik.values.lastName,
    formik.values.email,
    formik.values.phoneNumber,
    formik.values.country,
    formik.values.city,
    formik.values.checked,
  ]);
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
              <form onSubmit={formik.handleSubmit}>
                <div className={style.box_input}>
                  <label
                    style={formik.errors.firstName ? { color: "#E5271B" } : null}
                  >
                    Ваше имя
                  </label>
                  <input
                    className={style.input}
                    placeholder="Например Иван"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    style={
                      formik.errors.firstName
                        ? { border: "1px solid #E5271B" }
                        : null
                    }
                  />
                </div>
                <div className={style.box_input}>
                  <label
                    style={formik.errors.lastName ? { color: "#E5271B" } : null}
                  >
                    Ваше фамилия
                  </label>
                  <input
                    className={style.input}
                    placeholder="Например Иванов"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    style={
                      formik.errors.lastName
                        ? { border: "1px solid #E5271B" }
                        : null
                    }
                  />
                </div>
                <div className={style.box_input}>
                  <label style={formik.errors.email ? { color: "#E5271B" } : null}>
                    Электронная почта
                  </label>
                  <input
                    className={style.input}
                    placeholder="example@mail.com"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    style={
                      formik.errors.email ? { border: "1px solid #E5271B" } : null
                    }
                  />
                </div>
                <div className={style.box_input}>
                  <label
                    style={formik.errors.phoneNumber ? { color: "#E5271B" } : null}
                  >
                    Ваш номер телефона
                  </label>
                  <input
                    placeholder="Введите номер телефона"
                    className={style.input}
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    style={
                      formik.errors.phoneNumber
                        ? { border: "1px solid #E5271B" }
                        : null
                    }
                  />
                </div>
                <div className={style.box_input}>
                  <label
                    style={formik.errors.country ? { color: "#E5271B" } : null}
                  >
                    Страна
                  </label>
                  <input
                    className={style.input}
                    placeholder="Введите страну"
                    name="country"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    style={
                      formik.errors.country ? { border: "1px solid #E5271B" } : null
                    }
                  />
                </div>
                <div className={style.box_input}>
                  <label style={formik.errors.city ? { color: "#E5271B" } : null}>
                    Город
                  </label>
                  <input
                    className={style.input}
                    placeholder="Введите город"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    style={
                      formik.errors.city ? { border: "1px solid #E5271B" } : null
                    }
                  />
                </div>
                <div className={style.box_check}>
                  <input
                    type="checkbox"
                    name="checked"
                    id={style.check_box}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.checked}
                    style={
                      formik.errors.checked ? { border: "1px solid #E5271B" } : null
                    }
                  />
                  <h6>
                    Согласен с условиями{" "}
                    <Link to={"/offer"} style={{ color: "blue" }}>
                      публичной оферты
                    </Link>
                  </h6>
                </div>
                <Button
                  id={style.button}
                  type="submit"
                  disabled={stateBtn}
                  variant={stateBtn ? 'secondary' : 'dark'}
                >
                  Заказать
                </Button>{" "}
              </form>
            </div>
          ) : (
            <SuccessModal closeModal={removeLocalStorage} />
          )}
        </ModalWindow>
      )}
    </>
  );
};

export default Checkout;
