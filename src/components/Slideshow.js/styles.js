import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    position: relative;
    

    .items{
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;

        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    .item{
        display: flex;
        margin-left: 5%;
        padding: 0 25px 0 25px;

        width: 100%;
        height: 34vw;

        scroll-snap-align: start;

        pointer-events: none;
    }

    .TextContainer{
        justify-content: center;
        width: 45%;
        margin-right: 5%;
        height: 34vw;
        background-color: #3A2657;
        border-radius: 12px;
        z-index: 1;

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 76%;
            height: 100%;
            margin: auto;
            color: #FFF;

            p{
                font-size: max(16px, 5px);
            }

            > * {
                &:nth-child(1) {
                    font-size: 35px;
                    margin-bottom: 5%;
                }

                &:nth-child(2) {
                    margin-bottom: 5%;
                }
            }
        }
    }

    img{
        width: 45%;
        height: 100%;
        object-fit: contain;
    }

    .buttonContainer{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        pointer-events: none;
        padding: 2%;
        z-index: 10;

        .button{
            width: 3vw;
            height: 3vw;
            min-width: 30px;
            min-height: 30px;
            border-radius: 50%;
            background-color: gray;
            display: grid;
            place-items: center;
            opacity: .5;
            pointer-events: auto;

            &:hover {
                opacity: 1;
              }
        }

        img{
            width: 50%;
        }

        .arrow1{
            transform: rotate(180deg);
        }

    }

    @media (max-width: 768px) {
        .TextContainer{
            width: 100%;
            height: 200px;
            margin-bottom: 5%;
            margin-right: 0;
            
            div {
                p {
                    font-size: 12px;
                }

                > * {
                    &:nth-child(1) {
                        font-size: 20px;
                        margin-bottom: 5%;
                    }
                }
            }
        }
        .items{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .item{
            height: 50vw;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;

            img{
                width: 100%;
            }
        }
    }
`

export { Container }