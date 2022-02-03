import FaqCard from "../../cards/FaqCard"
import { Title } from "../../Title/styles"
import { Section } from "./styles"

const FaqSection = () => {

  return (
    <Section>
      <Title>FAQ</Title>

      <div className="faqCardsWrapper">
        <FaqCard
          question="How many NFTs are available for minting?"
          answer="In total xxxx NFTs."
        />
      </div>
    </Section>
  )
}

export default FaqSection