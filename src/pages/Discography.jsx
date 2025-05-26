import { Container, Table } from 'react-bootstrap'
import SectionHeader from '../components/SectionHeader'

const Discography = () => {
  const albums = [
    { year: 2023, title: "Album Name", artist: "Artist Name", role: "Session Drummer", links: ["Spotify", "Apple Music"] },
    { year: 2022, title: "Another Album", artist: "Different Artist", role: "Touring Drummer", links: ["Spotify", "Bandcamp"] },
    { year: 2021, title: "Collaboration Project", artist: "Various Artists", role: "Featured Drummer", links: ["Spotify"] },
    { year: 2020, title: "Debut Solo Work", artist: "My Project", role: "Composer/Performer", links: ["Spotify", "Apple Music", "Bandcamp"] },
  ]

  return (
    <Container className="my-5">
      <SectionHeader title="Discography" subtitle="Albums & Projects" />
      
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Role</th>
            <th>Streaming</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album, index) => (
            <tr key={index}>
              <td>{album.year}</td>
              <td>{album.title}</td>
              <td>{album.artist}</td>
              <td>{album.role}</td>
              <td>
                {album.links.map((link, i) => (
                  <span key={i}>
                    {i > 0 && ', '}
                    <a href={`https://${link.toLowerCase().replace(' ', '')}.com`}>{link}</a>
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <div className="mt-5">
        <h3>Featured On</h3>
        <ul>
          <li>"Song Name" - Artist (2023)</li>
          <li>"Another Song" - Different Artist (2022)</li>
          <li>"Collaboration Track" - Various Artists (2021)</li>
        </ul>
      </div>
    </Container>
  )
}

export default Discography