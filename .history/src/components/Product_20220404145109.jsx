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
              <div>
                {data.data[idProd].image.slice(0, 4).map(el => (
                  <divclassName={style.product} >
                    <img src={el}/>
                  </divclassName=>
                ))}
              </div>
              <div>
              <h6>{data.data[idProd].title}</h6>
              </div>
              </div>
        }
    </div>
  )
}

export default Product