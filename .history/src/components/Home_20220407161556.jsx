import React from "react";
import style from "../assets/styles/home.module.css";
import CaroselComponent from "./Carousel";
import Advantages from "./Advantages";
import GetCollections from "./GetCollections";
import NewClothes from "./NewClothes";
import Hit from "./Hit";
import FloatingBtn from "./FloatingBtn";

const Home = () => {
  return (
    <div className={style.content}>
      <CaroselComponent />
      <Hit />
      <NewClothes />
      <GetCollections />
      <Advantages />
      <FloatingBtn />
    </div>
  );
};

export default Home;
