import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 11;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;

  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Nav = styled.nav`
  display: flex;

  p + p {
    margin-left: 50px;
  }
`

export const NavLink = styled.p`
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    border-bottom: 4px solid var(--black);
  }
`

export const IconWrapper = styled.div`
  display: flex;
  margin-right: 36px;

  div + div {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const IconSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: var(--white);
  border-radius: 10px;
`