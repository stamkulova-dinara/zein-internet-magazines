import { GET_BASKET, GET_FAVORITE, GET_SEARCH } from "./actionTypes"

export const getBasket =(basket)=>({
    // return (dispatch)
    type: GET_BASKET,
    payload: localStorage.getItem(JSON.P'basket') 
})

export const getFavorite =(favorites)=>({
    type: GET_FAVORITE,
    payload: favorites  
})

export const getSearch =(searchResult)=>({
    type: GET_SEARCH,
    payload: searchResult  
})