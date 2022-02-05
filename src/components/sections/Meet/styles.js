import styled from "styled-components";

export const Section = styled.section`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .knightzWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    max-width: 1200px;
  }

  @media (max-width: 768px) {
    .knightzWrapper {
      justify-content: center;

      > div {
        margin: 20px;
      }
    }
  }
`