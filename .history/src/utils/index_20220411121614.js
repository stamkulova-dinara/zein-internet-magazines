import React from 'react'

const SubTotal = (prosucts) => {
  let total = 0;
  prosucts.forEach(el => total += el.price)
}

export default Fun