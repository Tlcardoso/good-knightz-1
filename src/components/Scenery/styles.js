import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden;

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
      transform: translate(50%, 0);
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
      bottom: 30px;
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
      bottom: -65px;
      z-index: 2;
    }

    div:nth-child(1) {
      bottom: -40px;
      transform: rotate(6deg);
    }
  }

  .castleWrapper {
    position: absolute;
    bottom: 0;
    right: 50px;
    z-index: 1;
  }
`;
