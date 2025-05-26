import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import SectionHeader from '../components/SectionHeader'

const Media = () => {
  return (
    <Container className="my-5">
      <SectionHeader title="Media" subtitle="Performances & Sessions" />
      
      <Tabs defaultActiveKey="videos" id="media-tabs" className="mb-4">
        <Tab eventKey="videos" title="Videos">
          <Row className="g-4 mt-3">
            <Col md={6} lg={4}>
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="YouTube video" 
                  allowFullScreen
                ></iframe>
              </div>
              <h5 className="mt-2">Live Performance - Jazz Festival 2023</h5>
            </Col>
            <Col md={6} lg={4}>
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="YouTube video" 
                  allowFullScreen
                ></iframe>
              </div>
              <h5 className="mt-2">Studio Session - Album Recording</h5>
            </Col>
            <Col md={6} lg={4}>
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="YouTube video" 
                  allowFullScreen
                ></iframe>
              </div>
              <h5 className="mt-2">Drum Cam - "Song Name"</h5>
            </Col>
          </Row>
        </Tab>
        
        <Tab eventKey="audio" title="Audio">
          <Row className="g-4 mt-3">
            <Col md={6}>
              <div className="p-3 bg-light rounded">
                <h5>Track 1 - Artist Name</h5>
                <audio controls className="w-100 mt-2">
                  <source src="/audio/track1.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </Col>
            <Col md={6}>
              <div className="p-3 bg-light rounded">
                <h5>Track 2 - Artist Name</h5>
                <audio controls className="w-100 mt-2">
                  <source src="/audio/track2.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </Col>
          </Row>
        </Tab>
        
        <Tab eventKey="photos" title="Photos">
          <Row className="g-4 mt-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Col key={item} xs={6} md={4} lg={3}>
                <img 
                  src={`/drummer-photo-${item}.jpg`} 
                  alt={`Drumming photo ${item}`} 
                  className="img-fluid rounded"
                />
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Media