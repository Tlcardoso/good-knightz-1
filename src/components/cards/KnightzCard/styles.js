import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 40px;
  }

  .name {
    color: var(--white);
    font-size: 32px;
    margin-bottom: 15px;
  }

  .nickName {
    color: var(--pink-dark);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .description {
    font-size: 18px;
    color: var(--white);
    opacity: 0.75;
    width: 270px;
  }
`