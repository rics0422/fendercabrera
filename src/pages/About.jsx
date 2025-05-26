import { Container, Row, Col, Image } from 'react-bootstrap'
import SectionHeader from '../components/SectionHeader'

const About = () => {
  return (
    <Container className="my-5">
      <SectionHeader title="About Me" subtitle="My Journey" />
      
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image src="/fender_bio.png" fluid rounded className="mb-4 mb-md-0" />
        </Col>
        <Col md={6}>
          <h3>My Story</h3>
          <p>
            I started drumming at the age of 10 when my parents bought me my first drum set. 
            What began as a hobby quickly turned into a passion that has shaped my life.
          </p>
          <p>
            After studying at the Berklee College of Music, I began my professional career 
            touring with indie bands before establishing myself as a sought-after session drummer.
          </p>
          <p>
            My style blends technical precision with raw energy, drawing from influences like 
            John Bonham, Steve Gadd, and Questlove.
          </p>
        </Col>
      </Row>
      
      <Row className="mb-5">
        <Col>
          <h3 className="mb-4">Press Highlights</h3>
          <blockquote className="blockquote">
            <p>"One of the most versatile and dynamic drummers on the scene today."</p>
            <footer className="blockquote-footer">Modern Drummer Magazine</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p>"His pocket is deep and his feel is impeccable."</p>
            <footer className="blockquote-footer">Recording Producer, XYZ Studios</footer>
          </blockquote>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h3>Training & Education</h3>
          <ul>
            <li>Berklee College of Music - Professional Music Degree</li>
            <li>Drummers Collective - Summer Intensive Program</li>
            <li>Private study with renowned instructors</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default About