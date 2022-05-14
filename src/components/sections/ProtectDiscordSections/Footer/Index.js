import React from 'react'
import InfoCard from '../../../cards/InfoCard'
import DiscordSVG from '../../../SVGs/ProtectDiscordSections/DiscordSVG'
import WavesSVG from '../../../SVGs/WavesSVG'
import { Container } from './styles'

const FooterNew = () => {
  return (
    <Container>
        <WavesSVG />
        <div className='footer'>
            <div className='buttonContainer'>
                <div>Contact Us</div>
                <InfoCard spotlight> 
                    <DiscordSVG fill={'#FFF'}/>
                    Add to your server
                </InfoCard>
            </div>

            <div className='creditsTermsAndCondition'>
                <p>© Rarefied Studios, LLC</p>
                <div className='supportContainer'>
                    <p>SUPPORT</p>
                    <p>Terms OF SERVICE </p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default FooterNew