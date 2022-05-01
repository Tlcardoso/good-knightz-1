import { useEffect, useState } from "react"
import useWindowSize from "../../Hooks/useWindowSize"
import CastleSVG from "../SVGs/Scenery/CastleSVG"
import LeftTreeSVG from "../SVGs/Scenery/LeftTreeSVG"
import RightTreeSVG from "../SVGs/Scenery/RightTreeSVG"
import useBrightness from '../../Hooks/useBrightness'
import { Container } from "./styles"
import useReverse from "../../Hooks/useReverse"
import useMoveItems from "../../Hooks/useMoveItems"


const Scenery = () => {

  const [scale, setScale] = useState(1)

  const move = useMoveItems(0, 25)

  const size = useWindowSize();
  
  useEffect(() => {
    // 1920px is the default width of the figma design
    // Need to recalculate the scale to fit the screen
    setScale(size.width / 1920)
  }, [size])


  const clarity = useBrightness()
  const castle = useReverse(1920, 1, 1.37)

  return (
    <>
    <Container style={{filter: `brightness(${clarity})`}}>

      <div className="treesWrapper1" style={{left: `${-move}%`}}>
        <LeftTreeSVG scale={scale}/>
      </div>

      <div className="treesWrapper2" style={{right: `${-move}%`}}>
        <RightTreeSVG scale={scale}/>
      </div>

      <div className="castleWrapper">
        <CastleSVG scale={castle}/>
      </div>
    </Container>
    </>
  )
}

export default Scenery