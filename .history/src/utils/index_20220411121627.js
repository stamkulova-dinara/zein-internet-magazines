import React from 'react'

expo const SubTotal = (prosucts) => {
  let total = 0;
  prosucts.forEach(el => total += el.price)
}