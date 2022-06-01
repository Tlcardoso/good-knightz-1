import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to="/privacy">
                    <p>© Rarefied Studios, LLC</p>
                </Link>
                <div className='supportContainer'>
                    <p>SUPPORT</p>
                    <Link to="/terms">
                        <p>Terms OF SERVICE </p>
                    </Link>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default FooterNew