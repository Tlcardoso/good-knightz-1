import styled from "styled-components";

const Container = styled.div`
  background-color: #251B33;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`


export {Container};