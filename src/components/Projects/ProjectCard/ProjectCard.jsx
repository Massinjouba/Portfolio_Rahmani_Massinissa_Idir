import React from 'react';
import PropTypes from 'prop-types';
import "./ProjectCard.css";
import { Link } from 'react-router-dom';

const ProjectCard = ({ details }) => {
  return (
    <div className='project-card'>
      <h6>{details.title}</h6>
      <div className='project-duration'>{details.date}</div>
      <ul>
        {details.description.map((item, index) => (
          <li key={index}>
            {item}
            <Link to={`/${details.path}`}>...Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

ProjectCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    path: PropTypes.string.isRequired // Ajout de la validation pour path
  }).isRequired
};

export default ProjectCard;
