import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

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
            <div>
              <div>
                {data.data[idProd].image.map(el => (
                  <div>
                    <
                  </div>
                ))}
              </div>
              <div>
              {/* <h6>{data.data[idProd].title}</h6> */}
              </div>
              </div>
        }
    </div>
  )
}

export default Product