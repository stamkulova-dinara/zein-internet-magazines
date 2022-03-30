import React from 'react'

const Card = () => {
  return (
    <div>
        {state.map((el) => {
  return (
    <div key={el.id}>
        <img src={el.image[colorIndex]}/>
      {el.color.map(col => (
        <button style={{backgroundColor: col}} onClick={() => setColorIndex(el.color.indexOf(col))}>col</button>
      ))}
    </div>
  )
})}
    </div>
  )
}

export default Card