import React, { useEffect, useState } from 'react';
import data from '/src/utils/feedback.json'; 
import './FeedbackList.css';

const FeedbackList = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
 
    setFeedbackData(data);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>); // Etoile pleine
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Etoile vide
      }
    }
    return <span className="stars">{stars}</span>;
  };

  return (
    <div className='feed-container'>
      <h5 className='my-page'>Feedbacks</h5>
      <div className="feedback-container">
        <ul>
          {[...feedbackData].reverse().map((item, index) => (
            <li key={index} className="feedback-item">
              <div className="feedback-header">
                <h2>{item.name}</h2>
                <p>{renderStars(item.rating)}</p>
              </div>
              <p className='comment'>{item.feedback}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackList;
