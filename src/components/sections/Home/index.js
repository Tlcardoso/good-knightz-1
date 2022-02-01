import Button from "../../Button"
import { Section } from "./styles"

const HomeSection = () => {

  return(
    <Section>
      <div>
        <img src="svg/logo.svg" alt="Good knightz logo"/>
        <Button main>MINT KNIGHTZ</Button>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </Section>
  )
}

export default HomeSection
