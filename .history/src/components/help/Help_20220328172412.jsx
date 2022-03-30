import React from 'react'
import image from '../../assets/images/image1.png'

const helpData = [
    {
        title: ''
    }
]

const Help = () => {
  return (
    <div>
        <img src={image}/>
        <div>
            <h4>Помощь</h4>
            <Accordion>
                {helpData.map(el => (

                ))}
  </Accordion>
        </div>
    </div>
  )
}

export default Help