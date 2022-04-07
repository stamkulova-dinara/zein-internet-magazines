export const addItem = (product) => {
    return {
        type: 'ADDITTEM',
        payload: product
    }
}