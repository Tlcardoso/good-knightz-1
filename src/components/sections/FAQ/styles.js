import styled from 'styled-components';

export const Section = styled.div`
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .faqCardsWrapper {
    width: 100%;
    > div {
      margin: 20px auto;
    }
  }
}
`