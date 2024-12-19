import React from 'react'
import './Home.css'
import Navbar from '../navbar/Navbar'
import MainContent from '../Main-content/MainContent'
import Extandle from '../Extandle/Extandle'

function Home() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Extandle />
    </div>
  )
}

export default Home