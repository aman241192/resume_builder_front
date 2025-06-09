import React from 'react';
import { ResumeData } from '../data/resumeData';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Certifications from './Certifications';
import Languages from './Languages';
import PrintButton from './PrintButton';

interface ResumeProps {
  data: ResumeData;
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-sm print:shadow-none print:py-4">
        <Header profile={data.profile} contact={data.contact} />
        <div className="divide-y divide-gray-100">
          <Experience experience={data.experience} />
          <Education education={data.education} />
          <Skills skills={data.skills} />
          <Certifications certifications={data.certifications} />
          <Languages languages={data.languages} />
        </div>
        <PrintButton />
      </div>
    </div>
  );
};

export default Resume;