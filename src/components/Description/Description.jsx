import React from 'react'
import "./Description.css"
const Description = () => {
  return (
    <section className='description-container' id='section1'>
      <div className='description-content'>
        <h2>Hello! I'am</h2>
        <h3 id='My-name'>
            <span  className='My-name'>M</span>
            <span  className='My-name'>A</span>
            <span  className='My-name'>S</span>
            <span  className='My-name'>S</span>
            <span  className='My-name'>I</span>
            <span  className='My-name'>N</span>
            <span  className='My-name'>I</span>
            <span  className='My-name'>S</span>
            <span  className='My-name'>S</span>
            <span  className='My-name'>A</span>
        </h3>
        <p>Passionate front-end developer | dedicated to creating 
            intuitive and engaging user experiences.
        </p>
      </div>

      <div className='My-pic'>
        <div>
            <div  className='tech-icon'>
                <img src="src\assets\images\image1.png" alt="react" />
            </div>
            <img src="src\assets\images\moi.png" alt="moi" className='moi'/>
        </div>
        <div>
            <div className='tech-icon'>
                <img src="src/assets/images/image2.png" alt="react" />
            </div>
            <div className='tech-icon'>
                <img src="src/assets/images/image3.png" alt="react" />
            </div>
            <div className='tech-icon'>
                <img src="src/assets/images/image4.png" alt="react" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Description
