import React from 'react'
import image from '../../assets/images/image1.png'
import { Accordion } from 'react-bootstrap'
import style from './help.module.css'
import style from '../assets/'


const helpData = [
    {
        id: 1,
        title: 'Как я могу заказать одежду?'
    },
    {
        id: 2,
        title: 'Как осуществляется доставка?'
    },
    {
        id: 3,
        title: 'Где производятся вещи?'
    },
    {
        id: 4,
        title: 'Как будет упакован заказ?'
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor sit amet?'
    },
    {
        id: 6,
        title: 'Есть ли возврат, при условии если одежда пришла не того размера?'
    },
    {
        id: 7,
        title: 'Как я могу оставить заявку на обратную связь'
    },
]

const Help = () => {
  return (
    <div className={style.help_content}>
        <img src={image} className={style.help_image}/>
        <div className={style.help_info}>
            <h4>Помощь</h4>
            <Accordion>
                {helpData.map(el => (
                    <Accordion.Item eventKey={el.id} id={style.item}>
                    <Accordion.Header id={style.item_info}>{el.title}</Accordion.Header>
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