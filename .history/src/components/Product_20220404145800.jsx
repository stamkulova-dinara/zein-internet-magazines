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
              <h6>height: 14px;
width: 65px;
left: 0px;
top: 3px;
border-radius: nullpx;
</h6>
              </div>
              </div>
        }
    </div>
  )
}

export default Product