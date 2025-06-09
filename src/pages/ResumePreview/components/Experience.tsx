import React from 'react';
// import { ResumeData } from '../data/resumeData';
// import { Calendar, Briefcase } from 'lucide-react';

interface ExperienceProps {
  // experience: ResumeData['experience'];
}

const Experience= ({ experience }) => {
 
  return (
    <section className="mb-8 animate-fadeIn\" style={{ animationDelay: '100ms' }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        {/* <Briefcase size={20} className="mr-2 text-primary" /> */}
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experience && experience.length>0 ?
        
        experience.map((job, index) => (
          <div key={index} className="group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {job?.position}
                </h3>
                <h4 className="text-lg font-medium text-gray-700">{job?.company}</h4>
              </div>
              <div className="flex items-center text-gray-600 mt-1 sm:mt-0">
                {/* <Calendar size={16} className="mr-1" /> */}
                <span>
                  {job?.startDate} - {job?.endDate}
                </span>
              </div>
            </div>
            {/* <p className="text-gray-600 mb-2">{job?.description}</p> */}

                <div
      dangerouslySetInnerHTML={{__html: job?.description}}
    />


            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
              {job?.achievements?.map((achievement, i) => (
                <li key={i} className="hover:text-gray-900 transition-colors">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))
      :
      <>Nothing to SHow</>
      
      }
      </div>
    </section>
  );
};

export default Experience;