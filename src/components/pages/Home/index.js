import Header from "../../Header";
import HomeSection from '../../sections/Home'
import StorySection from '../../sections/Story'
import RoadmapSection from '../../sections/Roadmap'
import MeetSection from "../../sections/Meet";
import PartnerSection from "../../sections/Partner";
import { Container } from './styles'
import FaqSection from "../../sections/FAQ";
import Footer from "../../Footer";
import Scenery from "../../Scenery";

const Home = () => {

  return (
    <>
    <Scenery />
    <Container>
      {/* <Header /> */}
      
      <HomeSection />
      <StorySection />
      <RoadmapSection />
      <MeetSection />
      <PartnerSection />
      <FaqSection />

      <Footer />
    </Container>
    </>
  )
}

export default Home