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
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {


  return (
    <>
    <Container>
      <Header />
      
      <div className="sceneryPath">
        <Scenery />
        <HomeSection />
        <div  className="teste">
          <StorySection/>
        </div>
        <div className="teste2">
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