export const SubTotal = (products) => {
  let total = 0;
  products.forEach(el => total += el.price)
  return;
}