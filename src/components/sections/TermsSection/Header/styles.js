import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: #251B33;

    color: white;
    width: 90vw;
    height: 200px;

    > * {
        &:nth-child(1) {
            width: 5vw;
            min-width: 40px;
            margin-left: 20px;
            cursor: pointer;
        }

        &:nth-child(2) {
            position: absolute;
            margin-left: 40%;
            height: 30vw;
            max-height: 180px;
        }
    }

    
`

export { Container };