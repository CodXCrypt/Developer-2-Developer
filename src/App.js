import React from 'react'
import Collaboration from './components/Collaboration';
import Community from './components/Community';
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Community />
      <Collaboration />
    </div>
  )
}

export default App