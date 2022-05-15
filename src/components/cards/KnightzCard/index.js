import { Container } from "./styles"

const KnightzCard = ({ name, nickName, avatar, children, link }) => {

  return (
    <Container>
      <img src={`svg/${avatar}.svg`} alt={`${name}'s avatar`}/>
      <h3 className='name'>{name}</h3>
      <a href={link} className='nickName'>
       {nickName}
      </a>
      <p className='description'>{children}</p>
    </Container>
  )
}

export default KnightzCard