import styled from 'styled-components'

const Container = styled.section`
    display: flex;

    img{
        width: 18vw;
    }

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;

        img{
            width: 70vw;
        }
      }

`

export {Container};