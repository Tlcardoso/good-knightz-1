import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 5%;
    position: relative;
    z-index: 10;

    .faqCardsWrapper{
        margin-top: 50px;
        width: 80vw;
        z-index: 10;
        
        > div {
            margin: 20px auto;
        }
    }

    .StardustContainer{
        position: absolute;
        right: 0;
        top: -13%;
        z-index: 1;

        > * {
            &:nth-child(2) {
                position: absolute;
                right: -10%;
                top: -20%;
                z-index: 1;
                opacity: 0.15;
            }

            &:nth-child(3) {
                position: absolute;
                right: 40%;
                top: 30%;
                z-index: 1;
            }

            &:nth-child(4) {
                position: absolute;
                left: 40%;
                top: 30%;
                z-index: 1;
            }
        }
    }

    .OwlContainer{
        position: absolute;
        left: 3%;
        top: 20%;

        > * {

            &:nth-child(1) {
                transform: scaleX(-1);
                position: relative;
                z-index: 10;
            }

            &:nth-child(2) {
                position: absolute;
                left: -3%;
                top: 80%;
            }
        }
    }

    .RockContainer{
        position: absolute;
        right: 2%;
        top: 57%;

        > * {

            &:nth-child(1) {
                position: relative;
                z-index: 10;
            }

            &:nth-child(2) {
                position: absolute;
                top: 70%;
                right: -20%;
            }
        }

    }

    .WaveContainer{
        position: absolute;
        bottom: -15%;
        left: 0;
        opacity: 0.15;
    }

    @media (max-width: 768px) {
        .StardustContainer{
            display: none;
        }

        .OwlContainer{
            display: none;
        }

        .RockContainer{
            display: none;
        }

        .WaveContainer{
            display: none;
        }
      }
`


export { Container }