import { useState, useEffect } from "react"
import FaqCard from "../../cards/FaqCard"
import { Title } from "../../Title/styles"
import { Section } from "./styles"
import useWindowSize from "../../../Hooks/useWindowSize"
import StarsSVG from "../../SVGs/Scenery/StarsSVG"

const FaqSection = () => {
  const [scale, setScale] = useState(1)
  const size = useWindowSize();
  
  useEffect(() => {
    setScale(size.width / 1920)
  }, [size])

  return (
    <Section id="faq">
      <div className="starsWrapper">
        <StarsSVG scale={scale} />
      </div>
      
      <Title>FAQ</Title>

      <div className="faqCardsWrapper">
        <FaqCard
          question="How many NFTs are available for minting?"
          answer="In total xxxx NFTs."
        />

        <FaqCard
          question="How many can I mint?"
          answer="In total xxxx NFTs."
        />

        <FaqCard
          question="How to buy/mint?"
          answer="In total xxxx NFTs."
        />

        <FaqCard
          question="How to view NFTs in your wallet?"
          answer="In total xxxx NFTs."
        />
      </div>
    </Section>
  )
}

export default FaqSection