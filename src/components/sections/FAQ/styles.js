import styled from 'styled-components';

export const Section = styled.div`
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .starsWrapper {
    position: absolute;
    top: -30px;
  }

  .faqCardsWrapper {
    margin-top: 50px;
    width: 100%;

    > div {
      margin: 20px auto;
    }
  }

  @media (max-width: 768px) {
    .starsWrapper {
      display: none;
    }
  }
}
`