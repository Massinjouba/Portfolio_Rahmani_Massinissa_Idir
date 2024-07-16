import './App.css'
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import Description from './components/Description/Description.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Footer from './components/Footer/Footer.jsx'
import Popup from './components/Popup/Popup.jsx'

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <>
      <Navbar setIsOpenPopup={setIsOpenPopup}/>
      <div className='container'>
        <Description/>
        <Skills/>
        <Projects/>
      </div>
      <Footer/>
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </>
  )
}

export default App
