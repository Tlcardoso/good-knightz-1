import styled, { keyframes } from 'styled-components'

const petAnimate = keyframes`
  0% { top: 0; }
  50% { top: 30px }
  100% { top: 0 }
`;

export const Section = styled.section`
  margin: 50px auto;
  position: relative;
  
  h1 {
    margin-bottom: 35px;
  }

  .starsWrapper {
    position: absolute;
    top: 20px;
  }

  .petContainer{
    position: absolute;
    top: 20px;
    width: 100%;

    div{
      position: absolute;
      animation: ${petAnimate} 1.5s linear infinite;
    }
    
    div:nth-child(1) {
        left: 50px;
    }

    div:nth-child(2) {
      right: 50px;
    }

  }
  
  .topInfoWrapper{
    max-width: 650px;
    margin: 0 auto 130px auto;
  }

  .roadmapCardsWrapper {
    > div {
      margin: 40px auto;
    }
  }

  @media (max-width: 1280px) {
    .topInfoWrapper{
      max-width: 570px;
    }
  }

  @media (max-width: 768px) {
    .topInfoWrapper{
      padding: 15px;
    }

    .starsWrapper {
      display: none;
    }

    .petContainer {
      display: none;
    }
  }
`
