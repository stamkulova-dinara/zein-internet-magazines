import React from 'react'
import image from '../../assets/images/image1.png'
import { Accordion } from 'react-bootstrap'

const helpData = [
    {
        id: 1,
        title: 'Как я могу заказать одежду?'
    },
    {
        title: 'Как осуществляется доставка?'
    },
    {
        title: 'Где производятся вещи?'
    },
    {
        title: 'Как будет упакован заказ?'
    },
    {
        title: 'Lorem ipsum dolor sit amet?'
    },
    {
        title: 'Есть ли возврат, при условии если одежда пришла не того размера?'
    },
    {
        title: 'Как я могу оставить заявку на обратную связь'
    },
]

const Help = () => {
  return (
    <div>
        <img src={image}/>
        <div>
            <h4>Помощь</h4>
            <Accordion>
                {helpData.map(el => (
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
  </Accordion>
        </div>
    </div>
  )
}

export default Help