import React, { useState } from 'react';
import "./Contact.css"
import Navbar from '../../components/Navbar/Navbar'
import ContactMe from '../../components/ContactMe/ContactMe'
import Footer from '../../components/Footer/Footer'
import Popup from '../../components/Popup/Popup'

function Contact ()  {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <Navbar setIsOpenPopup={setIsOpenPopup}/>
      <div className='container'>
        <ContactMe/>
      </div>
      <Footer/>
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </>
  )
}

export default Contact
