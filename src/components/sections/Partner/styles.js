import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 200px auto;
  display: flex;
  align-items: center;
  justify-content: space-around; 

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      margin-top: 20px;
    }
  }
`