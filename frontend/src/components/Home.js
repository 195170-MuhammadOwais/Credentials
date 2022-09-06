import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home(props) {
  
  return (
    <div className='container text-center' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 className='mt-5 my-4'>Home</h2>

      <Carousel>
        <Carousel.Item>
          <img
            className="w-100 h-25"
            src="https://images.wallpaperscraft.com/image/single/basketball_basketball_ball_ball_180663_1600x900.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Slide Description.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wallpaperscraft.com/image/single/basketball_ball_basketball_court_120082_1600x900.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Slide Description.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.hdqwalls.com/download/basketball-court-4k-p9-1600x900.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Slide Description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Home
