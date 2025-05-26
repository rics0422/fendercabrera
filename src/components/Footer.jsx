import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaYoutube, FaSpotify, FaApple } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Fender Cabrera</h5>
            <p>Professional session and touring drummer</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect</h5>
            <div className="social-icons">
              <a href="https://instagram.com" className="text-white me-3"><FaInstagram size={24} /></a>
              <a href="https://youtube.com" className="text-white me-3"><FaYoutube size={24} /></a>
              <a href="https://spotify.com" className="text-white me-3"><FaSpotify size={24} /></a>
              <a href="https://apple.com/music" className="text-white"><FaApple size={24} /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} FenderCabrera. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer