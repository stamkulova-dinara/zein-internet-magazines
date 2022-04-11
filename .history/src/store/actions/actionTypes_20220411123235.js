import { GET_BASKET, GET_FAVORITE, GET_SEARCH} from "./actions";


export const getBasket =(basket)=>({
    type: GET_BASKET,
    payload: basket  
})

export const getFavorite =(favorites)=>({
    type: GET_FAVORITE,
    payload: favorites  
})

export const GET_SEARCH =()=>({
    type: GET_BASKET,
    payload: basket  
})