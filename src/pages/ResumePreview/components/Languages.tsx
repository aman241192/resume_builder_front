import React from 'react';
// import { ResumeData } from '../data/resumeData';
// import { Globe } from 'lucide-react';

 

const Languages = ({ languages }) => {

  console.log('languages', languages)
  if (!languages || languages.length === 0) return null;

  return (
    <section className="mb-8 animate-fadeIn\" style={{ animationDelay: '500ms' }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
         Languages
      </h2>
      
      <div className="flex flex-wrap gap-4">
        {languages.map((language, index) => (
          <div 
            key={index} 
            className="bg-gray-50 px-4 py-2 rounded-md border border-gray-200 hover:border-primary transition-colors"
          >
            <p className="font-medium text-gray-800">{language.name}</p>
            <p className="text-sm text-gray-600">{language.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;