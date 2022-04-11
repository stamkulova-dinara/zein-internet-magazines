export const SubTotal = ({products}) => {
  let total = 0;
  products.forEach(el => total += el.price)
  return total;
}

export const AllProduct = ({count}) => {
  let pro = 1 
   count * el
}