import Header from "../../Header";
import HomeSection from '../../sections/Home'
import StorySection from '../../sections/Story'
import RoadmapSection from '../../sections/Roadmap'
import { Container } from './styles'
import MeetSection from "../../sections/Meet";

const Home = () => {

  return (
    <Container>
      <Header />

      <HomeSection />
      <StorySection />
      <RoadmapSection />
      <MeetSection />
    </Container>
  )
}

export default Home