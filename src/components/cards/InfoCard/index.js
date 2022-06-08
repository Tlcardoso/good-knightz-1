import React, { useEffect, useState } from 'react'
import { Container, LargeContainer } from './styles'

const InfoCard = ({ children, spotlight, big, link }) => {

  const bgColor = spotlight === true ? `9948E6` : '3A2657';

  const large = <LargeContainer style={{ backgroundColor: `#${bgColor}` }}>
                  <p>{children}</p>
                </LargeContainer>

  const small = <Container style={{ backgroundColor: `#${bgColor}` }}>
                  <a href={link} className='link'>
                    <p>{children}</p>
                  </a>
                </Container>

  if (big) return large;

  return small
}

export default InfoCard