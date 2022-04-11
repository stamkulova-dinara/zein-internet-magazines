// import { GET_BASKET, GET_FAVORITE, GET_SEARCH} from "./actions";


export const getBasket =(basket)=>({
    type: 'GET_BASKET',
    payload: basket  
})

export const getFavorite =(favorites)=>({
    type: 'GET_FAVORITE',
    payload: favorites  
})

export const getSearch =(searchResult)=>({
    type: GET_SEARCH,
    payload: searchResult  
})