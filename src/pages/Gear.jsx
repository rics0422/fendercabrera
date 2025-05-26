import { Container, Row, Col, Card } from 'react-bootstrap'
import SectionHeader from '../components/SectionHeader'

const Gear = () => {
  const gearCategories = [
    {
      title: 'Drum Kits',
      items: [
        '1965 Ludwig Classic Maple (22/13/16)',
        'Yamaha Recording Custom (20/12/14)',
        'DW Collector\'s Series (24/13/16/18)'
      ]
    },
    {
      title: 'Cymbals',
      items: [
        'Meinl Byzance 22" Jazz Thin Ride',
        'Zildjian K Custom 14" Hi-Hats',
        'Paiste Signature 18" Full Crash'
      ]
    },
    {
      title: 'Hardware',
      items: [
        'DW 9000 Series Pedals',
        'Gibraltar Rack System',
        'Yamaha Crosstown Hardware'
      ]
    },
    {
      title: 'Electronics',
      items: [
        'Roland SPD-SX Sampling Pad',
        'Ableton Live for Click Tracks',
        'Shure In-Ear Monitoring System'
      ]
    }
  ]

  return (
    <Container className="my-5">
      <SectionHeader title="Gear" subtitle="Tools of the Trade" />
      
      <Row className="g-4 mt-4">
        {gearCategories.map((category, index) => (
          <Col key={index} md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <ul>
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div className="mt-5">
        <h3>Endorsements</h3>
        <Row className="align-items-center">
          <Col xs={6} md={3} className="text-center mb-4">
            <img src="/meinl-logo.png" alt="Meinl Cymbals" className="img-fluid" style={{ maxHeight: '80px' }} />
          </Col>
          <Col xs={6} md={3} className="text-center mb-4">
            <img src="/dw-logo.png" alt="DW Drums" className="img-fluid" style={{ maxHeight: '80px' }} />
          </Col>
          <Col xs={6} md={3} className="text-center mb-4">
            <img src="/vicfirth-logo.png" alt="Vic Firth" className="img-fluid" style={{ maxHeight: '80px' }} />
          </Col>
          <Col xs={6} md={3} className="text-center mb-4">
            <img src="/shure-logo.png" alt="Shure" className="img-fluid" style={{ maxHeight: '80px' }} />
          </Col>
        </Row>
      </div>
      
      <div className="mt-4">
        <h3>Setup Photos</h3>
        <Row className="g-3">
          {[1, 2, 3, 4].map((item) => (
            <Col key={item} xs={6} md={3}>
              <img 
                src={`/drum-setup-${item}.jpg`} 
                alt={`Drum setup ${item}`} 
                className="img-fluid rounded"
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}

export default Gear