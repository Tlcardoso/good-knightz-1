import React, { useRef, useState } from 'react'
import { Container } from './styles'
import Carousel from 'react-elastic-carousel'

const Slideshow = () => {

    const items = useRef();

    const previousImg = () => {
        items.current.scrollBy(-500, 0)
    }   

    const nextImg = () => {
        items.current.scrollBy(500, 0)
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
        <div className='items' ref={items} id='items'>
            <div className='item'><img src='gif/scam_example_note.gif'/></div>
            <div className='item'><img src='gif/password_phone1.gif'/></div>   
        </div>
    </Container>
  )
}

export default Slideshow