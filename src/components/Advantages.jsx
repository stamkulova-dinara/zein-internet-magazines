import React, { useEffect, useState } from "react";
import style from "../assets/styles/advantages.module.css";
import { getAdvantages } from "../container/httpRequest";

const Advantages = () => {
  const [data, setData] = useState([])
  const advantages = async () => {
    const fetchData = await getAdvantages()
    setData(fetchData)
  }

  useEffect(() => {
    advantages()
  }, [])
  return (
    <section>
      <div className={style.theme}>
        <h3>Наши преимущества</h3>
      </div>
      <div className={style.advantages}>
        {data?.map(el=> (
           <div className={style.advanItem}>
           <img src={el.img} alt="photo" className={style.advanImage} />
           <h6>{el.title}</h6>
           <p className={style.advanInfo}>
             {el.description}
           </p>
         </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
