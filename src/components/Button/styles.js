import styled from 'styled-components'

export const Container = styled.button`
  cursor: pointer;
  color: var(--white);
  border: 3px solid var(--black);
  outline: 0;
  font-weight: 700;
  border-radius: 12px;
  font-size: ${props => props.type ? '24px' : '18px'};
  padding: ${props => props.type ? '24px 54px' : '24px 34px'};
  background-color: ${props => props.type ? 'var(--blue)' : 'var(--pink)'};
  box-shadow: 6px 6px 0 2px var(--black);
`