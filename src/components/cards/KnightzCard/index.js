import { Container } from "./styles"

const KnightzCard = ({ name, nickName, avatar, children }) => {

  return (
    <Container>
      <img src={`svg/${avatar}.svg`} alt={`${name}'s avatar`}/>
      <h3 className='name'>{name}</h3>
      <p className='nickName'>{nickName}</p>
      <p className='description'>{children}</p>
    </Container>
  )
}

export default KnightzCard