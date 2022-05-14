import { useState } from "react"
import { Container } from "./styles"

const FaqCard = ({ question, answer, secondarycolor }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  const buttonColor = {bgColor: "9948E6", xColor: "FFF"}

  return (
    <Container isOpen={showAnswer}>
      <div 
      className="toggle" 
      onClick={() => toggleAnswer()}
      style={{ backgroundColor: `#${secondarycolor ? buttonColor.bgColor : null}` }}
      >
        <div 
        className="vertical" 
        style={{ backgroundColor: `#${secondarycolor ? buttonColor.xColor : null}` }}
        />
        <div 
        className="horizontal"
        style={{ backgroundColor: `#${secondarycolor ? buttonColor.xColor : null}` }}
        />
      </div>
      <p className='question'>{question}</p>
      {
        showAnswer &&
        <p className='answer' showAnswer={showAnswer}>{answer}</p>
      }
    </Container>
  )
}

export default FaqCard