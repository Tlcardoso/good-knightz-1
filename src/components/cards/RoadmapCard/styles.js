import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 50px 100px;
  color: var(--white);
  background: var(--purple);
  border-radius: 12px;
  width: 870px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;

    span {
      margin-right: 13px;
      color: ${props => props.pinkDetail ? "var(--pink)" : "var(--green)"};
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.75;
  }

  .verticalElements {
    position: absolute;
    top: -40px;
    left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .dot {
    width: 24px;
    height: 24px;
    background: ${props => props.pinkDetail ? "var(--pink)" : "var(--white)"};
    border-radius: 50%;
    margin: 4px 0;
  }
  
  .smallLine {
    width: 2px;
    height: 110px;
    background: linear-gradient(180deg, transparent 0%, ${props => props.pinkDetail ? "var(--pink)" : "var(--white)"} 80%);
    background: ${props => props.pinkDetail 
      ? 'linear-gradient(180deg, transparent 0%, var(--pink) 80%)'
      : "var(--white)"
    };
  }

  .bigLine {
    width: 2px;
    height: 340px;
    background: var(--white);
  }
`