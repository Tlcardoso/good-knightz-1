import Button from '../Button';
import Input from '../Input';
import WavesSVG from '../SVGs/WavesSVG';
import { Container } from './styles';

const Footer = () => {

  return (
    <Container>
      <WavesSVG />
      
      <div className='footer'>
        <div className='subcribeStrip'>
          <div className='subscribeItem'>
            <div className='dot'/> <p>SUBSCRIBE</p>
          </div>

          <div className='subscribeItem'>
            <div className='dot'/> <p>SUBSCRIBE</p>
          </div>

          <div className='subscribeItem'>
            <div className='dot'/> <p>SUBSCRIBE</p>
          </div>

          <div className='subscribeItem'>
            <div className='dot'/> <p>SUBSCRIBE</p>
          </div>

          <div className='subscribeItem'>
            <div className='dot'/> <p>SUBSCRIBE</p>
          </div>
        </div>

        <div className='joinWrapper'>
          <Input placeholder='Your email address...'/>
          <Button main>JOIN</Button>
        </div>

        <div className='creditsTermsAndCondition'>
          <p>© Rarefied Studios, LLC</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </Container>
  )
} 

export default Footer