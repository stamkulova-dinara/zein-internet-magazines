import { GET_BASKET, GET_FAVORITE } from "./actionTypes"

export const getBasket =(basket)=>({
    return (dispatch)
    type: GET_BASKET,
    payload: basket  
})

export const getFavorite =(favorites)=>({
    type: GET_FAVORITE,
    payload: favorites  
})

export const getSearch =(searchResult)=>({
    type: GET_SEARCH,
    payload: searchResult  
})