export const GET_FAVORITE = 'GET_FAVORITE'
export const GET_BASKET = 'GET_BASKET'
export const GET_SEARCH = 'GET_SEARCH'

export const getBasket =(basket)=>({
    type: 'GET_BASKET',
    payload: basket  
})

export const getFavorite =(favorites)=>({
    type: 'GET_FAVORITE',
    payload: favorites  
})

export const getSearch =(searchResult)=>({
    type: 'GET_SEARCH',
    payload: searchResult  
})