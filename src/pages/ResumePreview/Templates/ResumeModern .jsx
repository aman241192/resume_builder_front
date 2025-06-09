import React from "react";

// Static resume data moved outside the component
const data = {
  personal: {
    firstName: "Aman",
    lastName: "Khare",
    jobTitle: "React Developer",
    address: "Lucknow",
    phone: "7984763386",
    email: "aman@fakemail.com",
    linkedin: "linkedin.com/in/amankhare",
    github: "github.com/amankhare",
  },
  summary:
    "Enthusiastic and quick-learning Fresher React Developer eager to contribute to innovative projects. Possessing a strong foundation in JavaScript, HTML, CSS, and React fundamentals. Proven ability to learn new technologies and collaborate effectively in team environments. Dedicated to building responsive and user-friendly web applications.",
  experience: [
    {
      company: "Artoon",
      position: "Developer",
      startDate: "24/11/2000",
      endDate: "Present",
      responsibilities: [
        "Leveraged cloud technologies (AWS, Azure) to scale applications.",
        "Created CI/CD pipelines with Jenkins and Docker.",
        "Maintained clean, testable, and documented code.",
        "Guided junior developers and led code reviews.",
      ],
    },
  ],
  education: [
    {
      university: "Amity University",
      degree: "MCA",
      field: "Computer",
      grade: "A",
      startDate: "24/11/2023",
      endDate: "Present",
    },
  ],
  projects: [
    {
      name: "Resume Builder",
      description: "A web app to build customizable resumes dynamically.",
    },
  ],
  skills: [
    {
      name: "React",
      level: 3,
    },
    {
      name: "JavaScript",
      level: 4,
    },
    {
      name: "CSS",
      level: 3,
    },
  ],
  languages: [
    {
      name: "Hindi",
      level: 3,
    },
    {
      name: "English",
      level: 4,
    },
  ],
  certifications: [
    "Certified React Developer - React Academy",
    "AWS Cloud Practitioner - Amazon",
  ],
  hobbies: ["Reading tech blogs", "Gaming", "Hiking"],
};

const ResumeModern = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow text-center border">
          <h1 className="text-3xl font-bold text-gray-800">
            {data.personal.firstName} {data.personal.lastName}
          </h1>
          <p className="text-lg text-blue-600">{data.personal.jobTitle}</p>
          <div className="mt-2 text-sm text-gray-600 space-y-1">
            <p>{data.personal.address}</p>
            <p>
              {data.personal.phone} | {data.personal.email}
            </p>
            <p>
              <a
                href={`https://${data.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href={`https://${data.personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Summary</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {data.summary}
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Experience
          </h2>
          {data.experience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-semibold text-lg">
                {exp.position} at {exp.company}
              </h3>
              <p className="text-sm text-gray-500">
                {exp.startDate} – {exp.endDate}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Education
          </h2>
          {data.education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <h3 className="font-semibold">
                {edu.university} - {edu.degree} in {edu.field}
              </h3>
              <p className="text-sm text-gray-500">
                {edu.startDate} – {edu.endDate}
              </p>
              <p className="text-sm">Grade: {edu.grade}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Projects</h2>
          {data.projects.map((project, idx) => (
            <div key={idx} className="mb-2">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Skills & Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Skills</h2>
            <ul className="text-sm text-gray-700 list-disc list-inside">
              {data.skills.map((skill, idx) => (
                <li key={idx}>
                  {skill.name} (Level: {skill.level})
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Languages
            </h2>
            <ul className="text-sm text-gray-700 list-disc list-inside">
              {data.languages.map((lang, idx) => (
                <li key={idx}>
                  {lang.name} (Level: {lang.level})
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Certifications
          </h2>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            {data.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Hobbies */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Hobbies</h2>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            {data.hobbies.map((hobby, idx) => (
              <li key={idx}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeModern;
