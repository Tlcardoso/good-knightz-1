import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    margin-top: 5%;
    position: relative;
    padding-left: 2.5%;
    padding-right: 2.5%;
    z-index: 10;

    > * {
        &:nth-child(1) {
            color: #FFF;
            font-size: 4vw;
            width: auto;
            margin: auto;
        }

        &:nth-child(2) {
            display: flex;
            justify-content: space-around;
            margin-top: 5%;
            z-index: 10;
        }
    }

    .StardustContainer{
        position: absolute;
        top: -25%;
        left: 0;
        z-index: 1;

        > * {
            &:nth-child(2) {
                position: absolute;
                top: 30%;
                left: 15%;
                z-index: 1;
            }

            &:nth-child(3) {
                position: absolute;
                top: 10%;
                left: 340%;
                z-index: 1;
            }
        }
    }

    @media (max-width: 768px) {

        padding: 0;

        .StardustContainer{
            display: none;
        }
        
        > * {
            &:nth-child(1) {
                font-size: 7vw;
            }

            &:nth-child(2) {
                flex-direction: column;
                align-items: center;
                font-size: 5vw;
            }
        }
    }
`

export {Container}