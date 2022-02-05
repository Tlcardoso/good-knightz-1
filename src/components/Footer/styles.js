import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  overflow: hidden;
  color: var(--white);

  .footer {
    margin-top: -6px;
    width: 100%;
    background: var(--black-void);
    display: flex;
    flex-direction: column;
    align-items: center;

    .joinWrapper {
      margin: 75px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        margin-right: 10px;
      }
    }

    .subcribeStrip {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 75px -50px 0 0;

      p {
        font-size: 52px;
        font-weight: bold;
        letter-spacing: -2px;
      }

      .subscribeItem {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .dot {
        width: 18px;
        height: 18px;
        background: var(--green);
        border-radius: 6px;
        margin: 25px;
      }
    }

    .creditsTermsAndCondition {
      padding: 30px 0;
      border-top: 2px solid var(--gray);
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;

      p {
        font-size: 18px;
        font-weight: 900;
      }
    }
  }

  @media (max-width: 768px) {
    .joinWrapper {
      display: flex;
      flex-direction: column;

      button {
        margin-top: 20px;
      }
    }
  }
`