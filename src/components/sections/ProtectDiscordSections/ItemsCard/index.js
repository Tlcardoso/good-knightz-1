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

const ItemsCard = () => {

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
                <HomeSection />
                <h1>The Best Protector of<br /> your Discord Server</h1>
                <h2>Community Security for Web3</h2>
                <InfoContainer>
                    <div>
                        <InfoCard>
                            Anti-hacker protection
                        </InfoCard>

                        <InfoCard>
                            Instant server lockdown
                        </InfoCard>

                        <InfoCard spotlight>
                            <DiscordSVG fill={'#FFF'}/>
                            Add to your server
                        </InfoCard>
                    </div>

                    <div>
                        <InfoCard>
                            Automated server audit
                        </InfoCard>

                        <InfoCard>
                            Anti-link technology
                        </InfoCard>

                        <a href='https://docs.goodknightbot.com/' className='documentation'>
                            <InfoCard spotlight>
                                Documentation
                            </InfoCard>
                        </a>
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