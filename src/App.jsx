
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Features from './components/Features'
import HowitWorks from './components/HowitWorks'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <main>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
        <Features/>
        <HowitWorks/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
