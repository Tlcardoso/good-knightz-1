import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { Title } from "../../../Title/styles"
import Stardust5SVG from '../../../SVGs/ProtectDiscordSections/Stardust5SVG'
import Waves2SVG from '../../../SVGs/ProtectDiscordSections/Waves2SVG'
import Rock2SVG from '../../../SVGs/ProtectDiscordSections/Rock2SVG'
import FaqCard from '../../../cards/FaqCard'
import useWindowSize from '../../../../Hooks/useWindowSize'
import KnightOwlSVG from '../../../SVGs/Scenery/KnightOwlSVG'
import Rock1SVG from '../../../SVGs/ProtectDiscordSections/Rock1SVG'
import PetRockSVG from '../../../SVGs/Scenery/PetRockSVG'
import Rock3SVG from '../../../SVGs/ProtectDiscordSections/Rock3SVG'
import Waves3SVG from '../../../SVGs/ProtectDiscordSections/Waves3SVG'

const SectionFAQ = () => {

  const [scale, setScale] = useState(1)

  const size = useWindowSize();

  useEffect(() => {
      // 1920px is the default width of the figma design
      // Need to recalculate the scale to fit the screen
      setScale(size.width / 1920)
  }, [size])

  return (
    <Container>
        <Title>FAQ</Title>
        <div className='faqCardsWrapper'>
          <FaqCard
            question="How does the Good Knight stop fake mint attacks?"
            answer="The bot’s innovative anti-link technology shields projects by automatically deleting any link that your server hasn't registered with the Good Knight! Even if a mod's account is compromised, attackers can't post their scam links without the mod's Good Knight password. Sir Prize scammers!"
            secondarycolor
          />

          <FaqCard
            question="Wait, Good Knight is going to store a password? Is it secure?"
            answer="Passwords are converted using the bcrypt library to salt and one-way hash passwords. These encrypted passwords are stored in a remote database. When a mod enters their password, this process is repeated to check the result against the stored encrypted password.Here's how it worksIn total xxxx NFTs."
            secondarycolor
          />

          <FaqCard
            question="What happens if the Good Knight database is compromised?"
            answer="All passwords are encrypted and uncrackable. Even if our database is compromised, the hackers only end up with a stack of useless strings"
            secondarycolor
          />

          <FaqCard
            question="Why is Good Knight so Draconian?"
            answer="Attackers can easily phish admins/mods to steal their discord token and log in as them (bypassing 2FA), without you ever knowing. Until an admin/mod supplies their password, Good Knight assumes that they are compromised. This is the key difference from any other bot out there."
            secondarycolor
          />

          <FaqCard
            question="Why open source? You could've sold this bot!"
            answer="We think that it's important to fight scammers in this space and make it safe for all communities. We can't expect to grow the NFT community while bad actors are stealing from new or inexperienced users. Project founders and community leaders have a responsibility to pave the way and make NFTs safe for all. Being open source allows us to tap into the huge wealth of knowledge and innovation in this space. We all deserve a gm!"
            secondarycolor
          />
          <FaqCard
            question="Do I really have to register every link? What if I want to whitelist certain sites such as Opensea?"
            answer="Any registered global link will automatically register any other links with that basename. For example, if you register https://twitter.com/, this will register any specific twitter link for example https://twitter.com/thegoodknightz"
            secondarycolor
          />
        </div>

        <div className='StardustContainer'>
          <Stardust5SVG scale={scale}/>
          <Waves2SVG scale={scale}/>
          <Rock2SVG scale={scale}/>
        </div>

        <div className='OwlContainer'>
          <img
            src="gif/Owl.gif"
            width={109 * scale}
            height={82 * scale}
          />
          <Rock1SVG
            scale={scale}
            width={109}
            height={149}
          />
        </div>

        <div className='RockContainer'>
          <img
            src="gif/Rock.gif"
            width={94 * scale}
            height={78 * scale}
          />
          <Rock3SVG
            scale={scale}
            width={201}
            height={102}
          />
        </div>

        <div className='WaveContainer'>
          <Waves3SVG scale={scale}/>
        </div>
    </Container>
  )
}

export default SectionFAQ