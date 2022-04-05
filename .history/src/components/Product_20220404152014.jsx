import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import style from '../assets/styles/product.module.css'

const Product = () => {
    const params = useParams()
    const [data, setData] = useState({});
    let idProd = params.productId - 1
    console.log(idProd)

    const getProduct = async () => {
      const fetchData = await fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/${params.id}`)
      const jsonData = await fetchData.json()
      setData(jsonData)
  }   

  console.log('hello',data.data)      
  
  useEffect(() => {
      getProduct()
  }, [])
  return (
    <div>
       {
            data.data &&
            <div className={style.product}>
              <div className={style.product_images}>
                {data.data[idProd].image.slice(0, 4).map(el => (
                  <div className={style.product_images}>
                    <img src={el} className={style.product_image}/>
                  </div>
                ))}
                 </div>
              <div className={style.product_info}>
              <h5>{data.data[idProd].title}</h5>
              <h6>Артикул: <span>{data.data[idProd].art}</span></h6>
              <div>
              <h6>Цвет:</h6>
              {data.data[idProd].color.map(e => {
                <div style={{
                  backgroundColor: e,
                  borderRadius: "50%",
                  width: "8px",
                  height: "8px",
                  marginRight: "10px",
                }}
                key={e.id}
                ></div>
              })}
              </div>
              </div>
              </div>
        }
    </div>
  )
}

export default Product