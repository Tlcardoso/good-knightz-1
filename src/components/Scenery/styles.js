import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: black;

  .flowersWrapper {
    div {
      position: absolute;
      bottom: 0;
      z-index: 5;
    }

    div:nth-child(1) {
      left: 0;
    }
    
    div:nth-child(2) {
      right: 50%;
    }

    div:nth-child(3) {
      right: 0;
    }

  }

  .bushWrapper {
    div {
      position: absolute;
      bottom: 0;
      z-index: 4;
    }

    div:nth-child(1) {
      left: 0;
    }

    div:nth-child(2) {
      right: 0;
    }
  }

  .treesWrapper {
    div {
      position: absolute;
      top: 0;
      z-index: 3;
    }

    div:nth-child(1) {
      left: 0;
    }

    div:nth-child(2) {
      right: 0;
    }
  }

  .fieldWrapper {
    div {
      position: absolute;
      bottom: 0;
      z-index: 2;
    }

    div:nth-child(1) {
      bottom: 40px;
    }
  }

  .castleWrapper {
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
`;
