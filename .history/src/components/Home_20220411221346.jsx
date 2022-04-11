import React from "react";
import style from "../assets/styles/home.module.css";
import CaroselComponent from "./Carousel";
import Advantages from "./Advantages";
import GetCollections from "./collection/GetCollections";
import NewClothes from "./NewClothes";
import Hit from "./Hit";
import FloatingBtn from "./FloatingButton/FloatingBtn";
import ScrollToTop from "./FloatingButton/ScrollToTop";

const Home = () => {
  return (
    <div className={style.content}>
      <CaroselComponent />
      <Hit />
      <NewClothes />
      <GetCollections />
      <Advantages />
      <ScrollToTop/>
      <FloatingBtn />
    </div>
  );
};

export default Home;
