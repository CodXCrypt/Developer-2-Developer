import React from 'react'
import Collaboration from './components/Collaboration';
import Community from './components/Community';
import Header from "./components/Header";
import Initiative from "./components/Initiative";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Initiative />
      <Community />
      <Collaboration />
      <Footer />
    </div>
  )
}

export default App