import { StyledInput } from './styles'

const Input = ({ type = 'text', placeholder}) => {

  return (
    <StyledInput type={type} placeholder={placeholder}/>
  )
}

export default Input