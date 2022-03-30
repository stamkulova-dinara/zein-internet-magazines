import React, { useState, useEffect } from "react";
import style from "./home.module.css";

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
        return (
          <div key={el.id}>
            <img src={el.image[colorIndex]} className={style.photo} />
            <div className={style.product_color}>
            {el.color.map((col) => (
              <div
                style={{ backgroundColor: col, borderRadius: '50%', width: '8px', height: '8px', marginRight: '10px' }}
                onClick={() => setColorIndex(el.color.indexOf(col))}
              >
                col
              </div>
            ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
