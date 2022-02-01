import { Container, Nav, NavLink, IconWrapper, IconSquare } from './styles'
import Button from '../Button'
import EmailSVG from '../SVGs/EmailSVG'
import TwitterSVG from '../SVGs/TwitterSVG'
import DiscordSVG from '../SVGs/DiscordSVG'

const Header = () => {

  return (
    <Container>
      <Nav>
        <NavLink>TEAM</NavLink>
        <NavLink>ROADMAP</NavLink>
        <NavLink>FAQ</NavLink>
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
        <Button>CONNECT WALLET</Button>
      </div>
    </Container>
  )
}

export default Header