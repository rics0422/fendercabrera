import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Media from './pages/Media'
// import Discography from './pages/Discography'
import Gigs from './pages/Gigs'
// import Gear from './pages/Gear'
// import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        {/* <Route path="/discography" element={<Discography />} /> */}
        <Route path="/gigs" element={<Gigs />} />
        {/* <Route path="/gear" element={<Gear />} /> */}
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App