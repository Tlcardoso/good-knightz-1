import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    margin-top: 5%;
    position: relative;
    z-index: 10;

    .noteContainer{
        width: 100vw;
        border-radius: 12px;
    }

    .StardustContainer{
        position: absolute;
        bottom: -50%;
        left: 0;
        z-index: 1;
    }


    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        
        .noteContainer{
            width: 95%;
            height: auto;
        }
    }
`


export { Container }