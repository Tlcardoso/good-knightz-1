import styled from 'styled-components';

export const Container = styled.div`
  width: 1170px;
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
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--green);
    position: absolute;
    top: 30px;
    right: 20px;

    .vertical {
      width: 4px;
      height: 35px;
      border-radius: 12px;
      background: var(--black);
      position: absolute;
      top: 5px;
      left: 21px;
    }

    .horizontal {
      width: 35px;
      height: 4px;
      border-radius: 12px;
      background: var(--black);
      position: absolute;
      top: 21px;
      left: 5px;
    }
  }
`