import React, {se} from 'react'
import { Link } from 'react-router-dom'
import bag from '../../assets/icon/shopping-bag.png'

const BasketBtn = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
   const favorite = localStorage.getItem('favorite')
   setFavorites(JSON.parse(favorite))
  },[])
  return (
    <div style={{marginTop: '28px'}}>
        <Link to={"/basket"}>
            <div style={{color: 'red'}}></div>
            <img src={bag} alt="icon" style={{marginRight: '2px'}}/>
            Корзина 
        </Link>
    </div>
  )
}

export default BasketBtn