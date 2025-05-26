import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import SectionHeader from '../components/SectionHeader'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <Container className="my-5">
      <SectionHeader title="Contact" subtitle="Get in Touch" />
      
      <Row className="mt-5">
        <Col md={6}>
          <h3 className="mb-4">Booking & Inquiries</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Select>
                <option>Booking Inquiry</option>
                <option>Session Work</option>
                <option>General Question</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
        
        <Col md={6} className="mt-4 mt-md-0">
          <h3 className="mb-4">Contact Info</h3>
          <div className="d-flex align-items-start mb-4">
            <FaEnvelope className="me-3 mt-1" size={20} />
            <div>
              <h5>Email</h5>
              <p className="mb-0">
                {/* Obfuscated email to prevent spam */}
                <span className="d-inline-block" style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}>
                  moc.liamg@arebracrednef
                </span>
              </p>
            </div>
          </div>
          
          <div className="d-flex align-items-start mb-4">
            <FaPhone className="me-3 mt-1" size={20} />
            <div>
              <h5>Phone</h5>
              <p className="mb-0">(555) 123-4567</p>
            </div>
          </div>
          
          <div className="d-flex align-items-start mb-4">
            <FaMapMarkerAlt className="me-3 mt-1" size={20} />
            <div>
              <h5>Location</h5>
              <p className="mb-0">Nashville, TN</p>
              <p className="mb-0">Available for travel worldwide</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h5>Social Media</h5>
            <div className="d-flex">
              <a href="https://www.instagram.com/pidong0948/" className="me-3">
                <img src="./Instagram_icon.png" alt="Instagram" width="32" />
              </a>
              <a href="https://www.youtube.com/@fenderdrumvideos4857" className="me-3">
                <img src="./youtube-icon.png" alt="YouTube" width="32" />
              </a>
              <a href="https://www.facebook.com/fender.cabrera.2024" className="me-3">
                <img src="./facebook-icon.png" alt="Facebook" width="32" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact