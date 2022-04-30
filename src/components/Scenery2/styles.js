import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow: hidden;


  .gameMaster {
    position: absolute;
    top: 160px;
    left: 400px;
    z-index: 3;
  }

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
      z-index: 2;
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
      bottom: -60px;
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

  @media (max-width: 1280px) {
    .gameMaster {
      position: absolute;
      bottom: 120px;
      left: 160px;
      z-index: 3;

      img {
        height: 250px;
      }
    }
  }

  @media (max-width: 768px) {

    svg {
      display: none;
    }
  }
`;
