import styled from 'styled-components'

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin-top: 50px;
  }

  select {
    font-size: 24px;
    font-weight: 900;
    background-color: var(--white);
    border: none;
    padding: 23px 30px;
    margin-top: 30px;
    width: 200px;
    height: 70px;
    border-radius: 12px;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
  }
`
