import React, {useState} from 'react'
import { useParams } from 'react-router'

const CollectionByTitle = () => {
    const params = useParams()
    const [collectionByTitle, setCollectionByTitle] = useState([])

    const getCollectionById = async () => {
        await fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/${params.id}`)
        .then(res=>res.json())
        .then(json=> setCollectionByTitle(json.data))
      }

     useEffect 
  return (
    <div>CollectionByTitle
        {collectionByTitle.map((el) => {
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
            })}
    </div>
  )
}

export default CollectionByTitle