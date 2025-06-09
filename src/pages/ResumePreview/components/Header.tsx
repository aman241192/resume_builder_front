import React from 'react';
// import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
// import { ResumeData } from '../data/resumeData';

interface HeaderProps {
  // profile: ResumeData['profile'];
  // contact: ResumeData['contact'];
}

const Header: React.FC<HeaderProps> = ({ profile, contact,personal,summary }) => {

   return (
    <header className="mb-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {profile?.photo && (
          <div className="flex-shrink-0">
            <img 
              src={profile?.photo} 
              alt={profile?.name} 
              className="w-24 h-24 rounded-full object-cover border-2 border-primary shadow-md"
            />
          </div>
        )}
        <div className="flex-grow">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">{personal?.firstName!=="" ? `${personal?.firstName} ${personal?.lastName}`: "____________"}</h1>
          <h2 className="text-xl text-primary font-medium mb-2">{personal?.jobTitle!="" ?personal?.jobTitle  : "________________________"}</h2>
          <p className="text-gray-600 mb-4 max-w-2xl">{summary ? summary:"________________________"}</p>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <a href={`mailto:${personal?.email ? personal?.email  : "________________________"}`} className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
          {/* <Mail size={16} /> */}
          <span>{personal?.email ?? "________________________"}</span>
        </a>
        <a href={`tel:${personal?.phone ?? "________________________"}`} className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
          {/* <Phone size={16} /> */}
          <span>{personal?.phone ?? "________________________"}</span>
        </a>
        <span className="flex items-center gap-1 text-gray-600">
          {/* <MapPin size={16} /> */}
          <span>{personal?.address ?? "________________________"}</span>
        </span>
       
       {/* Socila links */}
        {/* {contact?.website && (
          <a href={`https://${contact?.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
            <span>{contact?.website}</span>
          </a>
        )} */}
        {/* {contact?.linkedin && (
          <a href={`https://${contact?.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
             <span>{contact?.linkedin}</span>
          </a>
        )}
        {contact?.github && (
          <a href={`https://${contact?.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
             <span>{contact?.github}</span>
          </a>
        )} */}
      </div>
    </header>
  );
};

export default Header;