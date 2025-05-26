import { Container, Card } from 'react-bootstrap'
import SectionHeader from '../components/SectionHeader'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with John was an absolute pleasure. His timing is impeccable and he brought creative ideas to the session that elevated the entire album.",
      author: "Sarah Johnson",
      role: "Producer, ABC Records"
    },
    {
      quote: "One of the most versatile drummers I've had the privilege to work with. He can play anything from jazz to metal with equal skill and passion.",
      author: "Mike Thompson",
      role: "Band Leader, XYZ Group"
    },
    {
      quote: "John's ability to lock in with any rhythm section is remarkable. He's my first call for any session work.",
      author: "David Chen",
      role: "Bassist, Session Musician"
    }
  ]

  const press = [
    {
      title: "Modern Drummer Feature",
      source: "Modern Drummer Magazine",
      date: "June 2023",
      excerpt: "John Drummond's approach to groove is both innovative and deeply rooted in tradition..."
    },
    {
      title: "Interview: The Art of Session Drumming",
      source: "Drummer's Weekly",
      date: "March 2023",
      excerpt: "In our exclusive interview, John shares insights into his creative process and studio techniques..."
    }
  ]

  return (
    <Container className="my-5">
      <SectionHeader title="Testimonials & Press" subtitle="What Others Say" />
      
      <div className="mt-5">
        <h3 className="mb-4">Collaborator Testimonials</h3>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={4}>
              <Card className="h-100">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="font-italic">"{testimonial.quote}"</p>
                    <footer className="blockquote-footer mt-3">
                      <strong>{testimonial.author}</strong>, {testimonial.role}
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      
      <div className="mt-5">
        <h3 className="mb-4">Press Features</h3>
        {press.map((item, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {item.source} - {item.date}
              </Card.Subtitle>
              <Card.Text>{item.excerpt}</Card.Text>
              <Card.Link href="#">Read More</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  )
}

export default Testimonials