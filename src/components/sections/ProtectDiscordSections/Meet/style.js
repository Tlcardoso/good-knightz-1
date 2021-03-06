import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    position: relative;

    h1 {
        font-size: 35px;
        color: white;
    }

    .knightzWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 50px;
        max-width: 1200px;
        position: relative;
        z-index: 10;
      }

    p{
        text-align: center;
    }

    .DustContainer{
        position: absolute;
        top: 0;
        z-index: 1;
    }

    @media (max-width: 768px) {
        .knightzWrapper{
            justify-content: center;
        }

        .DustContainer{
            display: none;
        }
    }
`

export { Container }