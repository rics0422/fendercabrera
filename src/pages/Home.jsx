import Hero from '../components/Hero'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <Hero 
        title="Fender Cabrera" 
        subtitle="Professional Session & Touring Drummer"
        image="/fender_backg.png"
        ctaText="View My Work"
        ctaLink="/media"
      />
      
      <Container className="my-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src="/fender_aboutme.png" />
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  Learn about my journey, influences, and approach to drumming.
                </Card.Text>
                <a href="/about" className="btn btn-outline-primary">Read More</a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src="/fender_about.png" />
              <Card.Body>
                <Card.Title>Media</Card.Title>
                <Card.Text>
                  Watch performance videos, listen to tracks, and view photos.
                </Card.Text>
                <a href="/media" className="btn btn-outline-primary">View Media</a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src="/upcominggigs.png" />
              <Card.Body>
                <Card.Title>Upcoming Gigs</Card.Title>
                <Card.Text>
                  See where I'll be performing next and check out past shows.
                </Card.Text>
                <a href="/gigs" className="btn btn-outline-primary">View Schedule</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home