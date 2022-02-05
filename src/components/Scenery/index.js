import { useEffect, useState } from "react"
import useWindowSize from "../../Hooks/useWindowSize"
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
import { Container, GreenTrack } from "./styles"


const Scenery = () => {
  const [scale, setScale] = useState(0.65)
  const size = useWindowSize();
  
  useEffect(() => {
    // 1920px is the default width of the figma design
    // Need to recalculate the scale to fit the screen
    setScale(size.width / 1920)
  }, [size])

  return (
    <>
    <Container>

      {/* <GameMasterSVG /> */}

      <div className="flowersWrapper">
        <LeftFlowersSVG scale={scale}/>
        <CenterFlowersSVG scale={scale}/>
        <RightFlowersSVG scale={scale}/>
      </div>

      <div className="bushWrapper">
        <LeftBushSVG scale={scale}/>
        <RightBushSVG scale={scale}/>
      </div>

      <div className="treesWrapper">
        <LeftTreeSVG scale={scale}/>
        <RightTreeSVG scale={scale}/>
      </div>

      <div className="fieldWrapper">
        <LeftFieldSVG scale={scale}/>
        <MainFieldSVG scale={scale}/>
      </div>

      <div className="castleWrapper">
        <CastleSVG scale={scale}/>
      </div>

    </Container>
    </>
  )
}

export default Scenery