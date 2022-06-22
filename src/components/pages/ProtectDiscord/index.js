import React, { useRef, useState } from 'react'
import AntiLink from '../../sections/ProtectDiscordSections/AntiLink'
import SectionFAQ from '../../sections/ProtectDiscordSections/FAQ'
import ItemsCard from '../../sections/ProtectDiscordSections/ItemsCard'
import TeamSection from '../../sections/ProtectDiscordSections/Meet'
import Roadmap from '../../sections/ProtectDiscordSections/Roadmap'
import FooterNew from '../../sections/ProtectDiscordSections/Footer/Index'
import { Container } from './styles'

const ProtectDiscord = () => {
  const antiLink = useRef()
  const [indice, setIndice] = useState(0)

  const changeIndice = (n) => {
    setIndice(n)
  }

  return (
    <Container draggable="false">
      <ItemsCard reference={antiLink} number={changeIndice}/>
      <div ref={antiLink}>
        <AntiLink indice={indice}/>
      </div>
      <SectionFAQ/>
      <TeamSection/>
      <FooterNew/>
    </Container>
  )
}

export default ProtectDiscord