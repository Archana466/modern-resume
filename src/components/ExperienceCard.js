import React, { useState } from 'react';

const ExperienceCard = ({ company, role, duration, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card">
      <h5>{company}</h5>
      <h6>{role}</h6>
      <p>{duration}</p>
      <span className="btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Show More'}
      </span>
      {expanded && <p>{description}</p>}
    </div>
  );
};

export default ExperienceCard;
