import React, { useEffect, useState } from 'react'
import { Container, LargeContainer, Linked } from './styles'

const InfoCard = ({ children, spotlight, big, link, onClick }) => {

  const bgColor = spotlight === true ? `9948E6` : '3A2657';

  const [color, setColor] = useState(bgColor)

  const handleMouseLeave = () => {
    if(spotlight) return setColor('9948E6')

    return setColor('3A2657')
  }


  const handleMouseEnter = () => {
    if (spotlight) return setColor('69339c')

    return setColor('2c1d41')
  }

  const large = <LargeContainer style={{ backgroundColor: `#${bgColor}` }}>
                  <p>{children}</p>
                </LargeContainer>

  const small = <Linked href={link} className='link'>
                  <Container 
                    onClick={onClick}
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    style={{ backgroundColor: `#${color}` }}
                  >
                    <p>{children}</p>
                  </Container>
                </Linked>

  if (big) return large;

  return small
}

export default InfoCard