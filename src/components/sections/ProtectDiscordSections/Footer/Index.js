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
                <a href='mailto:info@rarefiedstudios.com' className='link'>
                    <div>Contact Us</div>
                </a>
                <InfoCard 
                    link='https://discord.com/oauth2/authorize?client_id=957481307405975552&permissions=805792792&scope=applications.commands%20bot' 
                    spotlight
                > 
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