import React from 'react';

const ProjectCard = ({ title, description, link }) => (
  <div className="card">
    <h5>{title}</h5>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
      View Project
    </a>
  </div>
);

export default ProjectCard;
