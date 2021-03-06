import { Container, Nav, NavLink, IconWrapper, IconSquare } from './styles'
import Button from '../Button'
import EmailSVG from '../SVGs/EmailSVG'
import TwitterSVG from '../SVGs/TwitterSVG'
import DiscordSVG from '../SVGs/DiscordSVG'

const Header = () => {

  const smoothScroll = (e, targetId) => {
    e.preventDefault()
    const targetPosition = document.getElementById(targetId);
    targetPosition && targetPosition.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container>
      <Nav>
        <NavLink onClick={(e) => smoothScroll(e, 'story')}>TEAM</NavLink>
        <NavLink onClick={(e) => smoothScroll(e, 'roadmap')}>ROADMAP</NavLink>
        <NavLink onClick={(e) => smoothScroll(e, 'faq')}>FAQ</NavLink>
      </Nav>

      <div>
        <IconWrapper>
          <IconSquare>
            <TwitterSVG />
          </IconSquare>

          <IconSquare>
            <DiscordSVG />
          </IconSquare>

          <IconSquare>
            <EmailSVG />
          </IconSquare>
        </IconWrapper>
        <Button>CONNECT</Button>
      </div>
    </Container>
  )
}

export default Header