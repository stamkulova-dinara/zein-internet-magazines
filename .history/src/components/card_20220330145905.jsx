import React, { useState, useEffect } from "react";
import style from "../assets/styles/home.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Card = () => {
  const [state, setState] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);

  const getClothes = async () => {
    const data = await fetch(
      "https://623c10012e056d1037f94796.mockapi.io/api/v1/collection"
    );
    const jsonData = await data.json();
    setState(jsonData);
    console.log(state);
  };
  console.log(colorIndex);

  useEffect(() => {
    getClothes();
  }, []);
  return (
    <div>
      {state.map((el) => {
        {el.new === true ? (
          
        )}
        return (
        );
      })}
    </div>
  );
};

export default Card;
