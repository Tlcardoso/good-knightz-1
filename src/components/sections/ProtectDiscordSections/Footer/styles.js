import styled from 'styled-components'

const Container = styled.div`
    margin-top: 5%;
    width: 100vw;

    .footer {
        margin-top: -6px;
        width: 100%;
        background: var(--black-void);
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .creditsTermsAndCondition {
            padding: 30px 0;
            border-top: 2px solid var(--gray);
            width: 100%;
            max-width: 1200px;
            display: flex;
            justify-content: space-between;
            color: #FFF;
      
            p {
              font-size: 18px;
              font-weight: 500 medium;
              color: white;
            }

            a{
                text-decoration: none; 
            }

            .supportContainer{
                display:flex;
                
                > * {
                    &:nth-child(1) {
                        margin-right: 10px;
                    }
                }
            }
        }

        .buttonContainer{
            display: flex;
            margin-top: 5%;
            margin-bottom: 5%;
            
            > * {
                &:nth-child(1) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #FFF;
                    width: 9vw;
                    min-width: 150px;
                    height: 60px;
                    border-radius: 12px;
                    margin-right: 10%;
                    font-weight: 500;
                    font-size: 24px;
                    padding: 5px 0 5px 0;
                }
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .creditsTermsAndCondition{
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .supportContainer{
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }
          }
    }

`

export { Container }