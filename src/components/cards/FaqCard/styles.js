import styled from 'styled-components';

export const Container = styled.div`
  width: min(1170px, 90%);
  padding: 35px 30px;
  color: var(--white);
  background: var(--purple-light);
  font-size: 24px;
  font-weight: 500;
  border-radius: 12px;
  position: relative;

  .answer {
    opacity: 0.75;
    transition: all 0.3s ease;
    margin-top: 20px;
    width: 95%;
  }

  .question{
    max-width: 78%;
  }

  .toggle {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--green);
    position: absolute;
    top: 30px;
    right: 20px;
    transition: all 0.3s ease;
    transform: rotate(${props => props.isOpen ? '135deg' : '0deg'});

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