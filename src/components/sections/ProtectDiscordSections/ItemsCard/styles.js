import styled from 'styled-components'

const Container = styled.section`
    width: 100%;
    display: flex;
    color: #FFFF;
    margin-top: 50px;
    position: relative;

    .TextContainer{
        margin-left: 5%;
    }

    .GMContainer{
        position: absolute;
        right: -4%;
        top: 27%;

        > * {
            &:nth-child(1) {
               margin-bottom: -21%;
               z-index: 10;
            }

            &:nth-child(3) {
                position: absolute;
                bottom: 3%;
                left: -14%;
            }
          }
    }

    .StardustContainer{
        position: absolute;
        top: -70px;
        right: -60px;

        > * {
            &:nth-child(2) {
               position: absolute;
               top: 0;
               right: 6%;
               opacity: 0.15;
            }

            &:nth-child(3) {
                position: absolute;
                top: 20%;
                right: 20%;
             }
        }
    }

    h1{
        font-size: 3vw;
        margin-bottom: 20px;
        margin-top: 70px;
        width: auto;
    }

    h2{
        font-size: 2vw;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 30px;

        .TextContainer{
            margin-left: 0px
        }

        h1{
            font-size: 7vw;
            margin-top: 30px;
        }

        h2{
            font-size: 4vw;
        }

        .GMContainer{
            display: none;
        }
      }

`

const InfoContainer = styled.div`
    display: flex;  

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
`

export {Container, InfoContainer};