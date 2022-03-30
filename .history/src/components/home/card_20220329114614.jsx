import React,  from 'react'

const Card = () => {
    const [state, setState] = useState([])
  const [colorIndex, setColorIndex] = useState(0)

  const getClothes = async () => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection')
    const jsonData = await data.json()
    setState(jsonData)
    console.log(state)
  }
  console.log(colorIndex)

  useEffect(() => {
    getClothes()
  }, [])
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