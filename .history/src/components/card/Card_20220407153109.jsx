import React from 'react'

const Card = ({product}) => {
  return (
    <div className={style.card_slider} key={el.id}>
    {product.sale !== null ? (
           <div className={style.arrow}>
           <span className={style.arrow_right}>{product.sale}%</span>
           </div>
        ) : (
          null
        )}
        <div className={style.likes} 
        onClick={() => {
          isFavorites.includes(product.id) ? 
            onClickFavouriteFalse(product.id) : onClickFavouriteTrue(product.id)
        }} 
        key={el.id}>
      {!isFavorites.includes(product.id) ? <FiHeart className={style.unlike} key={product.id}/> : <RiHeartFill className={style.like} key={product.id}/> }
    </div>
     <Swiper
     modules={[Scrollbar, Autoplay, A11y]}
     spaceBetween={50}
     slidesPerView={1}
     autoplay={true}
     scrollbar={{ draggable: true }}
     className={style.swipers}
   >
    {product.image.map(im => (
      <SwiperSlide>
      <img src={im} alt="" className={style.swiper_image} />
    </SwiperSlide>
    ))}
    </Swiper>
    <div className={style.card_info}>
    <Link to={`/collections/${params.id}/product/` + el.id}>
    <p id={style.title}>{protitle}</p>
             <h6>
               {price} p{" "}
               <span className={style.old_price}>
                   {oldPrice} c
                </span>
             </h6>
             <p className={style.size}>Размер: {size}</p>
    <div className={style.product_color}>
    {el.color.map(im => (
      <div
      key={im.index}
       style={{
         backgroundColor: im
       }}
       id={style.product_color}
     ></div>
    ))}
    </div>
    </Link>
    </div>
    </div>
  )
}

export default Card