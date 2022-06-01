import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

const TermsHeader = () => {
  return (
    <Container>
      <Link to="/">
        <img src='/images/backArrow.png'/>
      </Link>

      <img src="images/Logo_purple.png" alt="Good knightz logo"/>
    </Container>
  )
}

export default TermsHeader