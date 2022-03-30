import React from 'react'
import image from '../../assets/images/about.png'
import image2 from '../../assets/images/about1.png'
import image3 from '../../assets/images/about2.png'

const About = () => {
  return (
    <div>
      <div>
        <img src={image} />
        <img src={image3} />
        <div>
        <img src={image2} />
        </div>
      </div>
      <div>
        <p>У нас Вы найдёте всё, что Вам так нужно. Ассортимент магазина постоянно
           расширяется и дополняется в зависимости от пожеланий клиентов. Женская одежда
            из наших коллекций – это комфортная, стильная и качественная одежда не только
             на каждый день, но и для любых ситуаций по доступным ценам.Натуральные материалы,
              продуманные силуэты, современный дизайн и возможность легкого сочетания моделей
               помогут Вам всегда оставаться в центре внимания и чувствовать себя уместно в любой ситуации.
               Если Вы любите одеваться ярко, модно и оригинально, у нас Вы найдете все необходимое, чтобы всегда быть в центре внимания. У нас большая коллекция для любого торжества и праздника, которая сможет удовлетворить вкус самой взыскательной модницы! А для деловых ситуаций, в которых Вам непременно нужно выглядеть элегантно и стильно, мы предлагаем Вам одежду из коллекции "деловой стиль и офис". Мода постоянно диктует нам свои требования и для современной девушки, желающей идти в ногу со временем, важно иметь возможность постоянно пополнять свой гардероб стильной одеждой.</p>
      </div>
    </div>
  )
}

export default About