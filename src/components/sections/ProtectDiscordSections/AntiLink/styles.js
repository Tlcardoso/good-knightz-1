import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    margin-top: 5%;
    position: relative;
    z-index: 10;

    .TextContainer{
        justify-content: center;
        width: 44.5vw;
        height: 34vw;
        background-color: #3A2657;
        border-radius: 12px;
        z-index: 10;

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 76%;
            height: 100%;
            margin: auto;
            color: #FFF;

            p{
                font-size: max(1.3vw, 5px);
            }

            > * {
                &:nth-child(1) {
                    font-size: 3vw;
                    margin-bottom: 5%;
                }

                &:nth-child(2) {
                    margin-bottom: 5%;
                }
            }
        }
    }

    .noteContainer{
        justify-content: center;
        width: 44.5vw;
        border-radius: 12px;

        img{
            width: 100%;
            border-radius: 12px;
        }
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

        .TextContainer{
            width: 95%;
            margin-bottom: 5%;

            div{
    
                p{
                    font-size: max(2vw, 5px);
                }
            }
        }
        
        .noteContainer{
            width: 95%;
        }
    }
`


export { Container }