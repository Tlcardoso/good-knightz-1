import React, { useEffect, useState } from 'react'
import useWindowSize from '../../../../Hooks/useWindowSize'
import Slideshow from '../../../Slideshow.js'
import Stardust2SVG from '../../../SVGs/ProtectDiscordSections/Stardust2SVG'
import { Container } from './styles'

const AntiLink = () => {

  const [scale, setScale] = useState(1)

    const size = useWindowSize();

    useEffect(() => {
        // 1920px is the default width of the figma design
        // Need to recalculate the scale to fit the screen
        setScale(size.width / 1920)
    }, [size])

  return (
    <Container>
        <div className='TextContainer'>
            <div>
                <h1>Anti link technology </h1>
                <p>The Good Knight is a Discord Security Bot specifically developed for protecting Web3 communities.</p>
                <p>The bot’s innovative anti-link technology shields projects by automatically deleting any link that your
                    server hasn't registered with the Good Knight! Even if a mod's account is compromised, attackers can't post 
                    their scam links without the mod's Good Knight password. 
                </p>
            </div>
        </div>

        <div className='noteContainer'>
          <Slideshow/>
        </div>

        <div className='StardustContainer'>
          <Stardust2SVG scale={scale}/>
        </div>
    </Container>
  )
}

export default AntiLink