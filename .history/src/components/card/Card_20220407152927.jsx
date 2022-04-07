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
            onClickFavouriteFalse(.id) : onClickFavouriteTrue(el.id)
        }} 
        key={el.id}>
      {!isFavorites.includes(el.id) ? <FiHeart className={style.unlike} key={el.id}/> : <RiHeartFill className={style.like} key={el.id}/> }
    </div>
     <Swiper
     modules={[Scrollbar, Autoplay, A11y]}
     spaceBetween={50}
     slidesPerView={1}
     autoplay={true}
     scrollbar={{ draggable: true }}
     className={style.swipers}
   >
    {el.image.map(im => (
      <SwiperSlide>
      <img src={im} alt="" className={style.swiper_image} />
    </SwiperSlide>
    ))}
    </Swiper>
    <div className={style.card_info}>
    <Link to={`/collections/${params.id}/product/` + el.id}>
    <UniCard title={el.title} price={el.price} oldPrice={el.oldPrice} size={el.size}/>
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