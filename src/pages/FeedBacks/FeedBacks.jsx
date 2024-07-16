import React, { useState } from 'react';
import "./FeedBacks.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Popup from '../../components/Popup/Popup'
import FeedbackList from '../../components/FeedbackList/FeedbackList';

function FeedBacks ()  {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <Navbar setIsOpenPopup={setIsOpenPopup}/>
      <div className='container'>
        <FeedbackList/>
      </div>
      <Footer/>
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </>
  )
}

export default FeedBacks
