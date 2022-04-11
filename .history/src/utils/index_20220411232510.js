export const SubTotal = ({products}) => {
  let total = 0;
  products.forEach(el => total += el.price)
  return total;
}

export const AllProduct = ({products, count}) => {
  // let pro = 1
  products.forEach(el => count * el)
}