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
        flex: none;
        margin-left: 5px;

        width: 100%;
        height: 34vw;

        scroll-snap-align: start;

        pointer-events: none;
    }

    img{
        width: 100%;
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
        .item{
            height: 50vw;
        }
    }
`

export { Container }