import Header from "../../Header";
import HomeSection from '../../sections/Home'
import StorySection from '../../sections/Story'
import RoadmapSection from '../../sections/Roadmap'
import { Container } from './styles'

const Home = () => {

  return (
    <Container>
      <Header />

      <HomeSection />
      <StorySection />
      <RoadmapSection />
    </Container>
  )
}

export default Home