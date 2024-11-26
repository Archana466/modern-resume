import React from 'react';

const EducationCard = ({ school, degree, duration }) => (
  <div className="card">
    <h5>{school}</h5>
    <h6>{degree}</h6>
    <p>{duration}</p>
  </div>
);

export default EducationCard;
