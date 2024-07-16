import React, { useState } from 'react';
import "./Projet2.css"
import Navbar from '../../../components/Navbar/Navbar';
import Element2 from '../../../components/ProjectsElement/Element2/Element2';
import Footer from '../../../components/Footer/Footer';
import Popup from '../../../components/Popup/Popup';

function Projet2 ()  {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <Navbar setIsOpenPopup={setIsOpenPopup}/>
      <div className='container'>
        <Element2/>
      </div>
      <Footer/>
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </>
  )
}

export default Projet2
