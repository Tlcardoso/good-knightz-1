import styled from "styled-components";

const Container = styled.div`
    width: 17vw;
    min-width: 180px;
    height: 60px;
    display: flex;
    color: #FFFFFF;
    border-radius: 12px;
    align-items: center;
    font-style: normal;
    margin-bottom: 20px;
    margin-right: 15px;
    
    .link {
        margin: auto;
        font-size: max(1em, 12px);
        line-height: 100%;
        font-weight: 600;
        color: #FFF;
        text-decoration: none;

        p{
            display: flex;
            align-items: center;
            text-align: center;
        }
    }


    @media (max-width: 768px) {
        margin-right: 5px;
    }

`

const LargeContainer = styled.div`
    background-color: #3A2657;
    color: #FFF;
    width: 22vw;
    min-width: 180px;
    height: 12.7vw;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-size: max(1.5vw, 12px);
        line-height: 100%;
        font-weight: 600;
    }

    .link{
        text-decoration: none;
    }

    @media (max-width: 768px) {
        width: 95%;
        margin-top: 5px;

        p{
            font-size: max(1em, 12px);
        }
    }
`

export {Container, LargeContainer};