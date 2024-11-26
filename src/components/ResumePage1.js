import React from 'react';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import ProjectCard from './ProjectCard';

const ResumePage1 = () => (
  <div className="resume">
    <section>
      <h4>Experience</h4>
      <ExperienceCard
        company="PESU VENTURE LABS"
        role="Software Developer"
        duration="2024 - Present"
        description="Worked on various projects using React and Node.js."
      />
      <ExperienceCard
        company="STARTEK"
        role="Operational Analyst"
        duration="2023 - 2024"
        description="Background Verification of US Applicants."
      />
    </section>
    <section>
      <h4>Education</h4>
      <EducationCard
        school="Visveshwaraya technological University Belagavi"
        degree="Bachelor of Computer Science And Engineering"
        duration="2021 - 2023"
      />
    </section>
    <section>
      <h4>Projects</h4>
      <ProjectCard
        title="Awesome Project"
        description="A project that does amazing things."
        link="https://github.com/yourusername/awesome-project"
      />
    </section>
  </div>
);

export default ResumePage1;
