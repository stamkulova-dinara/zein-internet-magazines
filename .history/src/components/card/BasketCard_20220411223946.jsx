import React from 'react'
import 

const BasketCard = () => {
  return (
    <div className={style.product} key={el.id}>
    <img src={el.image[0]} className={style.image_product}/>
    <div className={style.product_info}>
        <h6 className={style.product_title}>{el.title}</h6>
        <p className={style.product_color}>Размер: <span>{el.size}</span></p>
        <p className={style.product_color}>Цвет:</p>
        <h6 className={style.product_price}>{el.price} р <span className={style.product_old_price}>{el.oldPrice} р</span></h6>
        <div className={style.count}>
            <button onClick={removeCountHandler} className={style.product_btn}>-</button>
            <h5 className={style.product_count}>{count}</h5>
            <button onClick={() => setCount(count + 1)} className={style.product_btn}>+</button>
        </div>
    </div>
    <FaTimes key={el.id} style={{marginLeft: '350px', cursor: 'pointer'}} onClick={() => del(el.id)}/>
    </div>
  )
}

export default BasketCard