import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import OtherHero from './Components/OtherHero'
import Iphone from './Components/Iphone'
import Container from './Components/Container'
import MovieContainer from './Components/MovieContainer'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      &nbsp;
      &nbsp;
      <Hero/>
      <OtherHero/>
      <Iphone/>
      <Container/>
      <MovieContainer/>
      <Footer/>
    </div>
  )
}

export default App