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

const Scenery2 = () => {

    const clarity = useBrightness()
    const bush = useParallax(1300, .4, 0.55)
    const field = useReverse(1920, .5, 1)

  return (
    <>
        <Container style={{filter: `brightness(${clarity})`}}>
            <div className="flowersWrapper">
                <LeftFlowersSVG scale={bush}/>
                <CenterFlowerSVG scale={bush}/>
                <RightFlowersSVG scale={bush}/>
            </div>

            <div className="fieldWrapper">
                <LeftFieldSVG scale={field}/>
                <MainFieldSVG scale={field}/>
            </div>

            <div className="bushWrapper">
                <LeftBushSVG scale={bush}/>
                <RightBushSVG scale={bush}/>
            </div>
        </Container>
    </>
  )
}

export default Scenery2