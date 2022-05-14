import React, { useEffect, useState } from 'react'
import InfoCard from '../../../cards/InfoCard'
import Startdust3SVG from '../../../SVGs/ProtectDiscordSections/Startdust3SVG'
import { Container } from './styles'
import { Title } from "../../../Title/styles"
import useWindowSize from '../../../../Hooks/useWindowSize'
import Rock3SVG from '../../../SVGs/ProtectDiscordSections/Rock3SVG'
import Dust4SVG from '../../../SVGs/ProtectDiscordSections/Dust4SVG'

const Roadmap = () => {

    const [scale, setScale] = useState(1)

    const size = useWindowSize();

    useEffect(() => {
        // 1920px is the default width of the figma design
        // Need to recalculate the scale to fit the screen
        setScale(size.width / 1920)
    }, [size])

  return (
    <Container>
        <Title>Good Knight Bot Functionality</Title>
        <div>
          <InfoCard big>Anti-hacker protection</InfoCard>
          <InfoCard big>Instant server lockdown </InfoCard>
          <InfoCard big>Anti-hacker protection</InfoCard>
          <InfoCard big>Instant server lockdown </InfoCard>
        </div>
        <div className='StardustContainer'>
          <Startdust3SVG scale={scale}/>
          <Rock3SVG scale={scale}/>
          <Dust4SVG scale={scale}/>
        </div>
    </Container>
  )
}

export default Roadmap