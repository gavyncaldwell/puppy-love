import { Container, Hero } from '../styles/base'

export default function Home() {
  return (
    <Container>
      <Hero>
        <div className='hero-overlay' />

        <div className='hero-content'>
          <img
            width='850'
            src='https://res.cloudinary.com/gavmanweb/image/upload/v1616883833/we-call-it-puppy-love/logo_transparent_background.png'
          />
        </div>

        <video
          playsInline
          autoPlay
          muted
          loop
          poster='https://res.cloudinary.com/gavmanweb/image/upload/v1616897059/we-call-it-puppy-love/puppy-1903313_1920.jpg'
        >
          <source
            src='https://res.cloudinary.com/gavmanweb/video/upload/v1616896865/we-call-it-puppy-love/Puppy_-_4740.mp4'
            type='video/mp4'
          />
        </video>
      </Hero>
    </Container>
  )
}
