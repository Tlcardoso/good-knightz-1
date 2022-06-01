import React from 'react'
import FooterNew from '../../sections/ProtectDiscordSections/Footer/Index'
import TermsHeader from '../../sections/TermsSection/Header/Index'
import TextTerms from '../../sections/TermsSection/text'
import TextContainer from '../../TextContainer'
import { Container } from './styles'

const TermsPage = () => {
  return (
    <Container>
        <TermsHeader/>
        <TextContainer>
            <TextTerms/>
        </TextContainer>
        <FooterNew/>
    </Container>
  )
}

export default TermsPage