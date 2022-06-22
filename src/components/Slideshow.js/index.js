import React, { useEffect, useRef, useState } from 'react'
import { images } from './slides';
import { Container } from './styles'

const Slideshow = ({indice}) => {
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        setSlide(indice)
    },[indice])

    const previousImg = () => {
        if (slide == 0) return setSlide(slide)

        return setSlide(slide - 1)
    }   

    const nextImg = () => {
        if (slide == 3) return setSlide(slide)
        setSlide(slide + 1)
    }
      
  return (
    <Container>
        <div className='buttonContainer'>
            <div className='button' onClick={previousImg}>
                <img className='arrow1' src={'images/arrow.png'}/>
            </div>
            <div className='button' onClick={nextImg}>
                <img src={'images/arrow.png'}/>
            </div>
        </div>
        <div className='items' id='items'>
            <div className='item'>
                {images[slide]}
            </div>   
        </div>
    </Container>
  )
}

export default Slideshow