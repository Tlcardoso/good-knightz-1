import React from 'react'
import TextPrivacy from '../../sections/PrivacySection'
import FooterNew from '../../sections/ProtectDiscordSections/Footer/Index'
import TermsHeader from '../../sections/TermsSection/Header/Index'
import TextContainer from '../../TextContainer'
import { Container } from './styles'

const PrivacyPage = () => {
  return (
    <Container>
        <TermsHeader/>
        <TextContainer>
            <TextPrivacy/>
        </TextContainer>
        <FooterNew/>
    </Container>
  )
}

export default PrivacyPage