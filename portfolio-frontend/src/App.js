import React from 'react'
import {About, Footer, Header, Skills, Testimonial, Work} from './Container'
import { Navbar } from './components';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App