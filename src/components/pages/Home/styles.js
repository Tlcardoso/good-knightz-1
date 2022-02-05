import styled from "styled-components";

export const Container = styled.div`
  margin-top: -100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    #b9ebf6 0%,
    #b9ebf6 2%,
    #fff8ec 10.15%,
    #ea90a0 15.67%,
    #69529a 32.83%,
    #392a51 66%,
    #1b1623 100%
  );

  section {
    position: relative;
    z-index: 10;
  }

  .sceneryPath {
    width: 100%;
  }
`;
