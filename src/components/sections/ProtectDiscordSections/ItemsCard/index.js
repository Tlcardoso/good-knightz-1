import React, { useEffect, useState } from 'react'
import useWindowSize from '../../../../Hooks/useWindowSize'
import InfoCard from '../../../cards/InfoCard'
import Rock1SVG from '../../../SVGs/ProtectDiscordSections/Rock1SVG'
import RockBigSVG from '../../../SVGs/ProtectDiscordSections/RockBigSVG'
import StardustWhiteSVG from '../../../SVGs/ProtectDiscordSections/StardustWhiteSVG'
import WhiteHatSVG from '../../../SVGs/ProtectDiscordSections/WhiteHatSVG'
import Waves1SVG from '../../../SVGs/ProtectDiscordSections/Waves1SVG'
import DiscordSVG from '../../../SVGs/ProtectDiscordSections/DiscordSVG'
import HomeSection from '../Home'
import { Container, InfoContainer } from './styles'
import MoonSVG from '../../../SVGs/ProtectDiscordSections/MoonSVG'

const ItemsCard = ({reference, number}) => {

    const [scale, setScale] = useState(1)

    const size = useWindowSize();

    const antiLinkScroll = (e) => {
        number(3)
        reference.current.scrollIntoView({ behavior: 'smooth', block: 'center' })  
    }
    
    const instantServerScroll = (e) => {
        number(2)
        reference.current.scrollIntoView({ behavior: 'smooth', block: 'center' })  
    }

    const automatedServerScroll = (e) => {
        number(1)
        reference.current.scrollIntoView({ behavior: 'smooth', block: 'center' })  
    }

    const antiHackerScroll = (e) => {
        number(0)
        reference.current.scrollIntoView({ behavior: 'smooth', block: 'center' })  
    }



    useEffect(() => {
        // 1920px is the default width of the figma design
        // Need to recalculate the scale to fit the screen
        setScale(size.width / 1920)
    }, [size])
    return (
        <Container draggable="false">
            <div className='TextContainer'>
                <HomeSection />
                <h1>The Best Protector of<br /> your Discord Server</h1>
                <h2>Community Security for Web3</h2>
                <InfoContainer>
                    <div>
                        <InfoCard onClick={antiHackerScroll}>
                            Anti-hacker protection
                        </InfoCard>

                        <InfoCard onClick={instantServerScroll}>
                            Instant server lockdown
                        </InfoCard>
            
                        <InfoCard 
                            link="https://discord.com/oauth2/authorize?client_id=957481307405975552&permissions=805792792&scope=applications.commands%20bot" 
                            spotlight
                        >
                            <DiscordSVG fill={'#FFF'}/>
                            Add to your server
                        </InfoCard>
                    </div>

                    <div>
                        <InfoCard onClick={automatedServerScroll}>
                            Automated server audit
                        </InfoCard>

                        <InfoCard onClick={antiLinkScroll}>
                            Anti-link technology
                        </InfoCard>

                        <InfoCard link='https://docs.goodknightbot.com/' spotlight>
                            Documentation
                        </InfoCard>
                    </div>
                </InfoContainer>
            </div>
            <div className="GMContainer">
                <WhiteHatSVG scale={scale} />
                <RockBigSVG scale={scale} />
                <Rock1SVG scale={scale} />
            </div>
            <div className='StardustContainer'>
                <StardustWhiteSVG scale={scale}/>
                <Waves1SVG scale={scale}/>
                <MoonSVG scale={scale}/>
            </div>
        </Container>
    )
}

export default ItemsCard