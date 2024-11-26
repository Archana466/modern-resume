import React from 'react';

const CertificationCard = ({ name, issuer, date }) => (
  <div className="card">
    <h5>{name}</h5>
    <h6>Issued by: {issuer}</h6>
    <p>Date: {date}</p>
  </div>
);

export default CertificationCard;
