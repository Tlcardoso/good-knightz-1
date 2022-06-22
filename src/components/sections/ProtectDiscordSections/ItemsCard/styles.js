import styled from 'styled-components'

const Container = styled.section`
    width: 100%;
    display: flex;
    color: #FFFF;
    margin-top: 50px;
    position: relative;
    z-index: 5;

    > * {
        &:nth-child(1) {
            position: relative;
            z-index: 3;
        }
    }

    .TextContainer{
        margin-left: 5%;
    }

    .GMContainer{
        position: absolute;
        right: -4%;
        top: 27%;
        z-index: 5;

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
        z-index: 2;

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
        font-size: 35px;
        margin-bottom: 20px;
        margin-top: 70px;
        width: auto;
    }

    h2{
        font-size: 20px;
        margin-bottom: 20px;
    }

    .documentation{
        text-decoration: none;
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
            font-size: 35px;
            margin-top: 30px;
        }

        h2{
            font-size: 20px;
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