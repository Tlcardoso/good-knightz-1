import styled from "styled-components";

const Linked = styled.a`
    text-decoration: none;
    display: flex;

    .link {
        margin: auto;
        line-height: 100%;
        font-weight: 600;
        color: #FFF;
        text-decoration: none;
    }
`

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
    background-color: red;
    cursor: pointer;
    

    p{
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: 600;
        font-size: 100%;
        margin: auto;
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

export {Container, LargeContainer, Linked};