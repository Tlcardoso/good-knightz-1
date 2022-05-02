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
import Scenery2 from "../../Scenery2";

const Home = () => {


  return (
    <>
    <Container>
      <Header />
      
      <div className="sceneryPath">
        <Scenery />
        <HomeSection />
        <div  className="Story">
          <StorySection/>
        </div>
        <div className="Scenery2">
          <Scenery2 />
        </div>
      </div>
      
      <div className="nonScenary">
        <RoadmapSection />
        <MeetSection />
        <PartnerSection />
        <FaqSection />
        <Footer />
      </div>

    </Container>
    </>
  )
}

export default Home