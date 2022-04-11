import React, { useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import style from '../../assets/styles/basket.module.css'

const BasketCard = ({product,del}) => {
    const [count, setCount] = useState(1)

    const removeCountHandler = () => {
        if(count === 1){
          return;  
        }
        setCount(count - 1);
    };

    console.log(product.id, count)
  return (
    <div className={style.product}>
    <div className={style.info_block}>
    <img src={product.image[0]} className={style.image_product}/>
    <div className={style.product_info}>
        <h6 className={style.product_title}>{product.title}</h6>
        <p className={style.product_color}>Размер: <span>{product.size}</span></p>
        <p className={style.product_color}>Цвет:
        <span ></span></p>
        <h6 className={style.product_price}>{product.price} р <span className={style.product_old_price}>{product.oldPrice} р</span></h6>
        <div className={style.count}>
            <button onClick={removeCountHandler} className={style.product_btn}>-</button>
            <h5 className={style.product_count}>{count}</h5>
            <button onClick={() => setCount(count + 1)} className={style.product_btn}>+</button>
        </div>
    </div>
    </div>
    <FaTimes key={product.id} onClick={del}/>
    </div>
  )
}

export default BasketCard