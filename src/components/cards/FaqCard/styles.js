import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 35px 30px;
  color: var(--white);
  background: var(--purple-light);
  font-size: 24px;
  font-weight: 500;
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease; 

  .answer {
    opacity: 0.75;
  }

  .toggle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--green);
    position: absolute;
    top: 20px;
    right: 20px;

    .vertical {
      width: 5px;
      height: 40px;
      border-radius: 12px;
      background: var(--black);
      position: absolute;
      top: 5px;
      left: 23px;
    }

    .horizontal {
      width: 40px;
      height: 5px;
      border-radius: 12px;
      background: var(--black);
      position: absolute;
      top: 23px;
      left: 5px;
    }
  }
`