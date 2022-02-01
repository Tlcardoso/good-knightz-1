import { Container } from './styles'

const Button = ({ children, main }) => {

  return (
    <Container type={main}>
      {children}
    </Container>
  )
}

export default Button