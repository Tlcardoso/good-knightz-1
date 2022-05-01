import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow: hidden;


  .flowersWrapper1 {
      position: absolute;
      bottom: 0;
      z-index: 5;
      left: 0;
  }

  .flowersWrapper2 {
      position: absolute;
      bottom: 0;
      z-index: 5;
      right: 50%;
      transform: translate(50%, 0);
  }

  .flowersWrapper3 {
      position: absolute;
      bottom: 0;
      z-index: 5;
      right: 0;
  }

  .bushWrapper1 {
      position: absolute;
      bottom: 0;
      z-index: 4;
      left: 0;
      bottom: 30px;
  }

  .bushWrapper2 {
    position: absolute;
    bottom: 0;
    z-index: 4;
    right: 0;
  }

  .fieldWrapper {
    div {
      position: absolute;
      bottom: -60px;
      z-index: 2;
    }

    div:nth-child(1) {
      bottom: -40px;
      left: -16px;
      transform: rotate(6deg);
    }
  }
`;
