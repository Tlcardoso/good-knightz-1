import styled from 'styled-components'

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
  }
`
