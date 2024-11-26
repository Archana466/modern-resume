import React from 'react';
import SkillsCard from './SkillsCard';
import CertificationCard from './CertificationCard';
import ContactInfo from './ContactInfo';

const ResumePage2 = () => (
  <div className="resume">
    <section>
      <h4>Skills</h4>
      <SkillsCard
        skills={["JavaScript", "React", "Node.js", "Python"]}
      />
    </section>
    <section>
      <h4>Certifications</h4>
      <CertificationCard
        name="Certified JavaScript Developer"
        issuer="Some Organization"
        date="June 2024"
      />
      <CertificationCard
        name="React Developer Certification"
        issuer="Another Organization"
        date="August 2024"
      />
    </section>
    <section>
      <h4>Contact Information</h4>
      <ContactInfo />
    </section>
  </div>
);

export default ResumePage2;
