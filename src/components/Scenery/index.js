import CastleSVG from "../SVGs/Scenery/CastleSVG"
import CenterFlowersSVG from "../SVGs/Scenery/CenterFlowersSVG"
import GameMasterSVG from "../SVGs/Scenery/GameMasterSVG"
import LeftBushSVG from "../SVGs/Scenery/LeftBushSVG"
import LeftFieldSVG from "../SVGs/Scenery/LeftFieldSVG"
import LeftFlowersSVG from "../SVGs/Scenery/LeftFlowersSVG"
import LeftTreeSVG from "../SVGs/Scenery/LeftTreeSVG"
import MainFieldSVG from "../SVGs/Scenery/MainFieldSVG"
import RightBushSVG from "../SVGs/Scenery/RightBushSVG"
import RightFlowersSVG from "../SVGs/Scenery/RightFlowersSVG"
import RightTreeSVG from "../SVGs/Scenery/RightTreeSVG"
import { Container } from "./styles"


const Scenery = () => {

  return (
    <Container>

      {/* <GameMasterSVG /> */}

      <div className="flowersWrapper">
        <LeftFlowersSVG />
        <CenterFlowersSVG />
        <RightFlowersSVG />
      </div>

      <div className="bushWrapper">
        <LeftBushSVG />
        <RightBushSVG />
      </div>

      <div className="treesWrapper">
        <LeftTreeSVG />
        <RightTreeSVG />
      </div>

      <div className="fieldWrapper">
        <LeftFieldSVG scale={0.5}/>
        <MainFieldSVG />
      </div>

      <div className="castleWrapper">
        <CastleSVG />
      </div>

    </Container>
  )
}

export default Scenery