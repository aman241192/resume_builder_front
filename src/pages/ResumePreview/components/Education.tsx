import React from 'react';
// import { ResumeData } from '../data/resumeData';
// import { GraduationCap, Calendar } from 'lucide-react';


const Education = ({ education }) => {
  return (
    <section className="mb-8 animate-fadeIn\" style={{ animationDelay: '200ms' }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        {/* <GraduationCap size={20} className="mr-2 text-primary" /> */}
        Education
      </h2>
      <div className="space-y-6">
        {(education && education.length>0) &&education.map((edu, index) => (
          <div key={index} className="group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {edu.university}
                </h3>
                <h4 className="text-lg font-medium text-gray-700">
                  {edu.degree} in {edu.fieldOfStudy}
                </h4>
              </div>
              <div className="flex items-center text-gray-600 mt-1 sm:mt-0">
                {/* <Calendar size={16} className="mr-1" /> */}
                <span>
                  {edu.start} - {edu.end}
                </span>
              </div>
            </div>
            
            {edu.grade && (
              <p className="text-gray-600 mb-2">GPA: {edu.grade}</p>
            )}
            
             <p  className="hover:text-gray-900 transition-colors">
                    {edu?.description}
                  </p>

            {/* {edu.highlights && edu.highlights.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                {edu.highlights.map((highlight, i) => (
                  <li key={i} className="hover:text-gray-900 transition-colors">
                    {highlight}
                  </li>
                ))}
              </ul>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;