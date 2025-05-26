import { Container, Button } from 'react-bootstrap'

const Hero = ({ title, subtitle, image, ctaText, ctaLink }) => {
  return (
    <section 
      className="hero-section text-white d-flex align-items-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh'
      }}
    >
      <Container className="text-center">
        <h1 className="display-3 fw-bold mb-3">{title}</h1>
        <p className="lead mb-4">{subtitle}</p>
        <Button variant="primary" size="lg" href={ctaLink}>{ctaText}</Button>
      </Container>
    </section>
  )
}

export default Hero