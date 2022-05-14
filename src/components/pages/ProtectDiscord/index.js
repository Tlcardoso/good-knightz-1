import React from 'react'
import AntiLink from '../../sections/ProtectDiscordSections/AntiLink'
import SectionFAQ from '../../sections/ProtectDiscordSections/FAQ'
import ItemsCard from '../../sections/ProtectDiscordSections/ItemsCard'
import TeamSection from '../../sections/ProtectDiscordSections/Meet'
import Roadmap from '../../sections/ProtectDiscordSections/Roadmap'
import FooterNew from '../../sections/ProtectDiscordSections/Footer/Index'
import { Container } from './styles'

const ProtectDiscord = () => {
  return (
    <Container>
      <ItemsCard/>
      <Roadmap/>
      <AntiLink/>
      <SectionFAQ/>
      <TeamSection/>
      <FooterNew/>
    </Container>
  )
}

export default ProtectDiscord