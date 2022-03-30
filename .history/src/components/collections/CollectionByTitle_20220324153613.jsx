import React, {use} from 'react'
import { useParams } from 'react-router'

const CollectionByTitle = () => {
    const params = useParams()
    const [collectionByTitle, setCollectionByTitle] = useState([])

    const getCollectionById = async () => {
        await fetch(`https://623c10012e056d1037f94796.mockapi.io/api/v1/collections/${collectionId}`)
        .then(res=>res.json())
        .then(json=> setCollectionByTitle(json.data))
      }
  return (
    <div>CollectionByTitle</div>
  )
}

export default CollectionByTitle