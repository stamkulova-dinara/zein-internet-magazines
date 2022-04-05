import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

const Product = () => {
    const params = useParams()
    const [data, setData] = useState({});
    let idProd = params.product - 1
    console.log(idProd)
    const id = params.id
    //Id  коллекции

    const getProduct = async () => {
      const fetchData = await fetch(https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/${params.id}/)
      const jsonData = await fetchData.json()
      setData(jsonData)
  }   

  console.log('hello',data.data)      
  // console.log(data.data[1])
  
  useEffect(() => {
      getProduct()
  }, [])
  return (
    <div>

    </div>
  )
}

export default Product