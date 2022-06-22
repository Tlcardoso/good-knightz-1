import React, { useEffect, useState } from 'react'
import { Title } from '../../../Title/styles'
import { Container } from './style'
import KnightzCard from '../../../cards/KnightzCard/index'
import Stardust5SVG from '../../../SVGs/ProtectDiscordSections/Stardust5SVG'
import useWindowSize from '../../../../Hooks/useWindowSize'


const TeamSection = () => {

  const [scale, setScale] = useState(1)

  const size = useWindowSize();

  useEffect(() => {
      // 1920px is the default width of the figma design
      // Need to recalculate the scale to fit the screen
      setScale(size.width / 1920)
  }, [size])

  return (
    <Container>
        <h1>MEET THE TEAM</h1>
        <div className='knightzWrapper'>
          <KnightzCard name='Kyle Higdon' nickName='@cap_plantain' avatar='member-01' link={'https://twitter.com/Cap_Plantain'}>
          Good Knightz NFTs co-founder Good Knight Bot Developer
          </KnightzCard>

          <KnightzCard name='Natalia Vornic' nickName='@minibossgrl' avatar='member-02' link={'https://twitter.com/minibossgrl'}>
          Good Knightz NFTs co-founder Community Engagements and Administration
          </KnightzCard>
        </div>

        <div className='DustContainer'>
          <Stardust5SVG scale={scale}/>
        </div>
    </Container>
  )
}

export default TeamSection