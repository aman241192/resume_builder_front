import React from 'react';
// import { ResumeData } from '../data/resumeData';
// import { Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  // certifications?: ResumeData['certifications'];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="mb-8 animate-fadeIn\" style={{ animationDelay: '400ms' }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        {/* <Award size={20} className="mr-2 text-primary" /> */}
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors group">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              {cert.url && (
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-primary"
                >
                  {/* <ExternalLink size={16} /> */}
                </a>
              )}
            </div>
            <p className="text-gray-600">{cert.issuer}</p>
            <div className="flex items-center text-gray-500 mt-2 text-sm">
              {/* <Calendar size={14} className="mr-1" /> */}
              <span>{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;