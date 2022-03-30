import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
  const [collections, setCollections] = useState([])
  const [collectionId, setCollectionId] = useState(null)

  // const getCollectionById = async () => {
  //   await fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/${collectionId}`)
  //   .then(res=>res.json())
  //   .then(json=> setCollectionByTitle(json.data))
  // }

  // console.log(collectionByTitle)

  const data = async() => {
    await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collections')
    .then(res=>res.json())
    .then(json=> setCollections(json))
  }
  console.log(collections)
  console.log(collectionId)

  useEffect(() => {
    data()
  }, [])
  return (
    <div>Collections

<div>
      {collections.map((el) => {
        return (
          <div>
            <img src={el.image}/>
            <Link to={'/collections/'+el.id}>
            <button  onFocus={() => setCollectionId(el.id)}>{el.title}</button>
            </Link>
          </div>
        )
      })}
    </div>
    {/* {collectionByTitle.map((el) => {
        return (
          <div>
            <img src={el.image}/>
            <p>{el.title}</p>
            {el.color.map(e => {
              return (
                <button style={{backgroundColor: e}}>{e}</button>
              )
            })}
          </div>
        )
            })} */}
    </div>
  )
}

export default Collections