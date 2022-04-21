import React from "react";
import style from "../assets/styles/home.module.css";
import CaroselComponent from "./carousel/Carousel";
import Advantages from "./advantages/Advantages";
import GetCollections from "./collection/GetCollections";
import NewClothes from "./clotheHome/NewClothes";
import Hit from "./clotheHome/Hit";
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
      <ScrollToTop />
      <FloatingBtn />
    </div>
  );
};

export default Home;
