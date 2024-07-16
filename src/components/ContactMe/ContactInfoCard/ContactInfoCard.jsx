import React from 'react'
import PropTypes from 'prop-types'
import "./ContactInfoCard.css"

const ContactInfoCard = ({ iconUrl, text, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className='contact-details-card' onClick={handleClick} style={{ cursor: link ? 'pointer' : 'default' }}>
      <div className='icon'>
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  )
}

ContactInfoCard.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ContactInfoCard
