import { Container } from './styles'

const RoadmapCard = ({ index, title, children, pinkDetail }) => {

  return (
    <Container pinkDetail={pinkDetail}>
      <div className='verticalElements'>
        <div className='smallLine'/>
        <div className='dot'/>
        <div className='bigLine'/>
      </div>
      <h2>
        <span>{index}.</span>
        {title}
      </h2>
      <p>{children}</p>
    </Container>
  )
}

export default RoadmapCard