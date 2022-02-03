import { useState } from "react"
import { Container } from "./styles"

const FaqCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <Container>
      <div className="toggle" onClick={() => toggleAnswer()}>
        <div className="vertical"/>
        <div className="horizontal"/>
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