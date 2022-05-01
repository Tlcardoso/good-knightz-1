import React from 'react'
import { useState, useEffect } from 'react'
import LeftBushSVG from '../SVGs/Scenery/LeftBushSVG'
import LeftFlowersSVG from '../SVGs/Scenery/LeftFlowersSVG'
import RightBushSVG from '../SVGs/Scenery/RightBushSVG'
import RightFlowersSVG from '../SVGs/Scenery/RightFlowersSVG'
import CenterFlowerSVG from '../SVGs/Scenery/CenterFlowersSVG'
import { Container } from "./styles"
import LeftFieldSVG from '../SVGs/Scenery/LeftFieldSVG'
import MainFieldSVG from '../SVGs/Scenery/MainFieldSVG'
import useBrightness from '../../Hooks/useBrightness'
import useParallax from '../../Hooks/useParallax'
import useReverse from '../../Hooks/useReverse'
import useWindowSize from '../../Hooks/useWindowSize'
import useMoveItems from '../../Hooks/useMoveItems'

const Scenery2 = () => {

    const [scale, setScale] = useState(1)

    const size = useWindowSize();

    const move = useMoveItems(0, 25)
  
    useEffect(() => {
        // 1920px is the default width of the figma design
        // Need to recalculate the scale to fit the screen
        setScale(size.width / 1920)
    }, [size])

    const clarity = useBrightness()
    const field = useReverse(1920, .5, 1)

  return (
    <>
        <Container style={{filter: `brightness(${clarity})`}}>

            <div className="flowersWrapper1" style={{left: `${-move}%`}}>
                <LeftFlowersSVG scale={scale}/>
            </div>

            <div className="flowersWrapper2" style={{bottom: `${-move}%`}}>
                <CenterFlowerSVG scale={scale}/>
            </div>

            <div className="flowersWrapper3" style={{right: `${-move}%`}}>
                <RightFlowersSVG scale={scale} />
            </div>

            <div className="fieldWrapper">
                <LeftFieldSVG scale={field}/>
                <MainFieldSVG scale={field}/>
            </div>

            <div className="bushWrapper1" style={{left: `${-move}%`}}>
                <LeftBushSVG scale={scale} />
            </div>

            <div className="bushWrapper2" style={{right: `${-move}%`}}>
                <RightBushSVG scale={scale} />
            </div>
        </Container>
    </>
  )
}

export default Scenery2