import React from 'react'
import Collaboration from './components/Collaboration';
import Community from './components/Community';
import Header from "./components/Header";
import Initiative from "./components/Initiative";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Initiative />
      <Community />
      <Collaboration />
      <Contact />
      <Footer />
    </div>
  )
}

export default App