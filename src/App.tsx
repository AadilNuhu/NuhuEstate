import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Properties from './pages/Properties'
import Property from './pages/Property'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/property' element={<Property />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
