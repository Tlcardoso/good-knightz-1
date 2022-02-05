import styled from 'styled-components'

export const Section = styled.section`
  margin: 50px auto;
  
  h1 {
    margin-bottom: 35px;
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

  @media (max-width: 768px) {
    .topInfoWrapper{
      padding: 15px;
    }
  }
`
