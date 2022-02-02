import HomeSection from '../../sections/Home'
import StorySection from '../../sections/Story'
import { Container } from './styles'

const Home = () => {

  return (
    <Container>
      <HomeSection />
      <StorySection />
    </Container>
  )
}

export default Home