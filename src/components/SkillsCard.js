import React from 'react';

const SkillsCard = ({ skills = [] }) => (
  <div className="card skills">
    <h5>Skills</h5>
    <div>
      {skills.map((skill, index) => (
        <span key={index} className="chip">{skill}</span>
      ))}
    </div>
  </div>
);

export default SkillsCard;
