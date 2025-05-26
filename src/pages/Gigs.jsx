import { Container, ListGroup, Badge } from 'react-bootstrap'
import SectionHeader from '../components/SectionHeader'

const Gigs = () => {
  const upcomingGigs = [
    { date: '2023-11-15', venue: 'The Jazz Club', location: 'New York, NY', info: 'With XYZ Band' },
    { date: '2023-12-02', venue: 'Music Festival', location: 'Chicago, IL', info: 'Main Stage - 8PM' },
    { date: '2024-01-20', venue: 'Studio Session', location: 'Los Angeles, CA', info: 'Private Event' },
  ]

  const pastGigs = [
    { date: '2023-09-10', venue: 'Summer Fest', location: 'Austin, TX' },
    { date: '2023-08-05', venue: 'Club Gig', location: 'Boston, MA' },
    { date: '2023-07-22', venue: 'Recording Session', location: 'Nashville, TN' },
  ]

  return (
    <Container className="my-5">
      <SectionHeader title="Gigs & Events" subtitle="Where to See Me Play" />
      
      <h3 className="mt-5 mb-3">Upcoming Shows</h3>
      <ListGroup>
        {upcomingGigs.map((gig, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{gig.venue}</div>
              {new Date(gig.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} - {gig.location}
              <div className="text-muted small">{gig.info}</div>
            </div>
            <Badge bg="primary" pill>
              Coming Soon
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
      
      <h3 className="mt-5 mb-3">Past Performances</h3>
      <ListGroup>
        {pastGigs.map((gig, index) => (
          <ListGroup.Item key={index}>
            <div className="fw-bold">{gig.venue}</div>
            {new Date(gig.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} - {gig.location}
          </ListGroup.Item>
        ))}
      </ListGroup>
      
      <div className="mt-5">
        <h3>Stage Plot & Tech Rider</h3>
        <p>
          <a href="/stage-plot.pdf" className="btn btn-outline-secondary me-2">Download Stage Plot</a>
          <a href="/tech-rider.pdf" className="btn btn-outline-secondary">Download Tech Rider</a>
        </p>
      </div>
    </Container>
  )
}

export default Gigs