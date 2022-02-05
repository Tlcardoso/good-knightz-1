import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    position: relative;
    z-index: 10;
  }

  .sceneryPath {
    width: 100%;
    background: linear-gradient(
      180deg,
      #b9ebf6 0%,
      #fff8ec 25%,
      #ea90a0 50%,
      #69529a 75%,
      #392a51 100%
    );
  }

  .nonScenary {
    position: relative;
    z-index: 10;
    width: 100%;
    background: linear-gradient(
      180deg,
      #69529a 0%,
      #392a51 50%,
      #1b1623 100%
    );
  }

  @media (max-width: 768px) {
    background: linear-gradient(
      180deg,
      #b9ebf6 0%,
      #fff8ec 5%,
      #ea90a0 10%,
      #69529a 32.83%,
      #392a51 66%,
      #1b1623 100%
    );

    .sceneryPath,
    .nonScenary {
      background: transparent;
    }
  }
`
