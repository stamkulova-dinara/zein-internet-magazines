import React from 'react'
import { useParams } from 'react-router'

const Product = () => {
    const params = useParams()
    const [, setData] = useState({});
    let idProd = params.product - 1
    console.log(idProd)
    const id = params.id
    //Id  коллекции
  return (
    <div>

    </div>
  )
}

export default Product