import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding-left: 5vw;
    padding-right: 5vw;
    color: white;
    margin-top: 200px;

    h1{
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 30px;
    }

    h2{
        margin-top: 40px;
        margin-bottom: 15px;
        font-size: 24px;
    }

    p{
        margin-bottom: 15px;
        color: #CCCCCC;
        font-size: 14px;
        line-height: 1.6;
    }

    li{
        margin-left: 30px;
        color: #CCCCCC;
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 5px;
    }

    @media (max-width: 768px) {
        li{
            margin: 0;
        }
    }
`


export { Container }