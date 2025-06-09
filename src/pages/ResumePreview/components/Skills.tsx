import { Rate } from 'antd';
import React from 'react';


const Skills = ({ skills }) => {

  const renderSkillLevel = (level: number | undefined) => {
    if (level === undefined) return null;
    
    return (
      <div className="flex items-center gap-1 ml-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${
              i <= level ? 'bg-primary' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="mb-8 animate-fadeIn" style={{ animationDelay: '300ms' }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
         Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(skills && skills.length>0) &&skills.map((skillCategory, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {skillCategory?.name}
            </h3>
            <ul className="space-y-2">
              
               <Rate   value={skillCategory?.rating} />

              {/* {skillCategory.items.map((skill, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span className="text-gray-700 hover:text-gray-900 transition-colors">
                    {skill.name}
                  </span>
                   {renderSkillLevel(skill.level)} 
                </li>
              ))} */}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;