import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Templates1 = () => {
  const data = useSelector((state) => state?.resume?.resumeData);

  const { resumeData } = useSelector((state) => state?.resume);
  const { personal, summary } = useSelector((state) => state?.resume);
  const { experiences } = useSelector((state) => state?.resume?.experience);
  const { education } = useSelector((state) => state?.resume);

  const [personalData, setPersonalData] = useState({});
  const [summaryData, setSummaryData] = useState({});
  const [experiance, setExperiance] = useState([]);

  useEffect(() => {
    setPersonalData(personal ?? resumeData?.personal);
    setSummaryData(summary != "" ? summary : resumeData?.summary);
    setExperiance(experiences ?? resumeData?.experience?.experiences);
  }, [personal, summary, experiences, resumeData]);

  // console.log("experiance:::::", experiance);

  console.log("summaryData", summaryData);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Resume View */}
      <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-sans shadow-lg rounded-lg">
        <header className="text-center border-b pb-4 mb-6">
          <h1 className="text-4xl font-bold">
            {personalData?.firstName
              ? `${personalData?.firstName} ${personalData?.lastName}`
              : "______________________"}
          </h1>
          <p className="text-xl text-gray-600">
            {personalData?.jobTitle ? personalData?.jobTitle : "_________"}
          </p>
          <div className="mt-2 text-sm text-gray-700">
            {personalData?.address ? personalData?.address : "_________"} |
            {personalData?.phone ? personalData?.phone : "_________"} |
            {personalData?.email ? personalData?.email : "_________"}
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-600">
            Professional Summary
          </h2>
          <p>{summaryData?.summary}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-600">
            Experience
          </h2>
          {experiance &&
            experiance?.map((exp, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-lg font-semibold">
                  {exp?.position} at {exp?.company}
                </h3>
                <p className="text-sm text-gray-600">
                  {exp?.startDate} – {exp?.endDate}
                </p>
                <div dangerouslySetInnerHTML={{ __html: exp?.description }} />
              </div>
            ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-600">
            Education
          </h2>
          {education?.education?.map((edu, i) => (
            <div key={i} className="mb-2">
              <h3 className="font-semibold text-gray-900">
                {edu?.university} - {edu?.degree} in {edu?.fieldOfStudy}
              </h3>
              <p className="text-sm text-gray-600">
                {edu?.start} – {edu?.end}
              </p>
              <p className="text-sm">Grade: {edu?.grade}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-600">
            Projects
          </h2>
          {data?.projects?.map((project, i) => (
            <div key={i} className="mb-2">
              <h3 className="font-semibold">{project?.name}</h3>
              <div dangerouslySetInnerHTML={{ __html: project?.description }} />
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-600">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {data?.skills?.map((skill, i) => (
              <li
                key={i}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                {skill?.name} (Level: {skill?.rating})
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-600">
            Languages
          </h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {data?.languages?.map((lang, i) => (
              <li
                key={i}
                className="bg-green-100 text-green-800 px-2 py-1 rounded"
              >
                {lang?.name} (Level: {lang?.level})
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Templates1;
