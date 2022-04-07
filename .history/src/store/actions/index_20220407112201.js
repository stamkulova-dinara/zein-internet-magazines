export const addItem = (product) => {
    return {
        type: 'ADDITTEM',
        payload: product
    }
}

export const delItem = (product) => {
    return {
        type: 'ITTEM',
        payload: product
    }
}