import React, { useEffect, useState } from 'react'
import useWindowSize from '../../../../Hooks/useWindowSize'
import Slideshow from '../../../Slideshow.js'
import Stardust2SVG from '../../../SVGs/ProtectDiscordSections/Stardust2SVG'
import { Container } from './styles'

const AntiLink = ({indice}) => {

  const [scale, setScale] = useState(1)

    const size = useWindowSize();

    useEffect(() => {
        // 1920px is the default width of the figma design
        // Need to recalculate the scale to fit the screen
        setScale(size.width / 1920)
    }, [size])

  return (
    <Container>
        <div className='noteContainer'>
          <Slideshow indice={indice}/>
        </div>

        <div className='StardustContainer'>
          <Stardust2SVG scale={scale}/>
        </div>
    </Container>
  )
}

export default AntiLink