import { GET_BASKET, GET_FAVORITE, GET_SEARCH } from "../constants"
import { useDispatch } from "react-redux"

export const getBasket =()=>({
    type: GET_BASKET,
    payload: localStorage.getItem(JSON.parse('basket')) 
})

export const getFavorite =(favorites)=>({
    type: GET_FAVORITE,
    payload: favorites  
})

export const getSearch =(searchResult)=>({
    type: GET_SEARCH,
    payload: searchResult  
})