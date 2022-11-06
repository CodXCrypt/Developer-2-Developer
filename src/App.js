import React from 'react'
import Collaboration from './components/Collaboration';
import Community from './components/Community';
import Header from "./components/Header";
import Initiative from "./components/Initiative";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Event from './components/Events';

const App = () => {
  return (
    <div>
      <Header />
      <Initiative />
      <Event />
      <Community />
      <Collaboration />
      <Contact />
      <Footer />
    </div>
  )
}

export default App