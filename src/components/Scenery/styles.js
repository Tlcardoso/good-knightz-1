import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow: hidden;


  .treesWrapper1 {
      position: absolute;
      top: 0;
      z-index: 2;
      left: 0;
  }

  .treesWrapper2 {
    position: absolute;
    top: 0;
    z-index: 2;
    right: 0;
  }

  .castleWrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .gameMaster {
      display: none;
    }
    svg {
      display: none;
    }
  }
`;
