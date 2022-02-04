import styled from "styled-components";

export const StyledInput = styled.input`
  background: var(--white);
  width: 372px;
  height: 70px;
  border-radius: 12px;
  padding: 0 20px;

  &::placeholder {
    font-size: 24px;
    font-weight: 500;
    color: var(--black);
  }
`