import React from 'react'
import { Carousel } from 'react-bootstrap'

const CaroselComponent = () => {
  const [state, setState] = useState
  const getClothes = async () => {
    const data = await fetch('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection/1')
    const jsonData = await data.json()
    setNewClothes(jsonData)
    console.log(newClothes)
  }
  return (
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://altermoda.ru/bundles/ostrovweb/images/o-kompanii/main_new_600x1920.jpg"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.lovemodestfashion.com/image/cache/catalog/banner-new-1-1920x600.jpg"
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.lovemodestfashion.com/image/cache/catalog/banner-new-2-1920x600.jpg"
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>

</>
  )
}

export default CaroselComponent