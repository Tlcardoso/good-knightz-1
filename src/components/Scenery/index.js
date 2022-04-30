import { useEffect, useState } from "react"
import useWindowSize from "../../Hooks/useWindowSize"
import CastleSVG from "../SVGs/Scenery/CastleSVG"
import LeftFieldSVG from "../SVGs/Scenery/LeftFieldSVG"
import LeftTreeSVG from "../SVGs/Scenery/LeftTreeSVG"
import MainFieldSVG from "../SVGs/Scenery/MainFieldSVG"
import RightTreeSVG from "../SVGs/Scenery/RightTreeSVG"
import useBrightness from '../../Hooks/useBrightness'
import { Container } from "./styles"
import useParallax from "../../Hooks/useParallax"
import useReverse from "../../Hooks/useReverse"


const Scenery = () => {


  const clarity = useBrightness()
  const tree = useParallax(1300, 1, 0.60)
  const castle = useReverse(1920, 1, 1.37)

  console.log(castle)
  


  return (
    <>
    <Container style={{filter: `brightness(${clarity})`}}>

      <div className="treesWrapper">
        <LeftTreeSVG scale={tree}/>
        <RightTreeSVG scale={tree}/>
      </div>

      <div className="castleWrapper">
        <CastleSVG scale={castle}/>
      </div>
    </Container>
    </>
  )
}

export default Scenery