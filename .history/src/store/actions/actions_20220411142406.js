import { GET_BASKET, GET_FAVORITE, GET_SEARCH } from "../constants"

export const getBasket =()=>({
    // return (dispatch)
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