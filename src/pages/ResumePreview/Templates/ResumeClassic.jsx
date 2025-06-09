import React from "react";

const ResumeClassic = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-5xl mx-auto flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <aside className="w-1/3 bg-blue-900 text-white p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Aman Khare</h2>
            <p className="text-sm">React Developer</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold border-b border-blue-700 mb-1 pb-1">
              Contact
            </h3>
            <p className="text-sm">Lucknow</p>
            <p className="text-sm">7984763386</p>
            <p className="text-sm">aman@fakemail.com</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold border-b border-blue-700 mb-1 pb-1">
              Skills
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>React (Level: 3)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold border-b border-blue-700 mb-1 pb-1">
              Languages
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Hindi (Level: 3)</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-2/3 p-6 text-gray-900">
          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-900 border-b mb-2 pb-1">
              Professional Summary
            </h2>
            <p className="text-sm">
              Enthusiastic and quick-learning Fresher React Developer eager to
              contribute to innovative projects. Possessing a strong foundation
              in JavaScript, HTML, CSS, and React fundamentals. Proven ability
              to learn new technologies and collaborate effectively in team
              environments.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-900 border-b mb-2 pb-1">
              Experience
            </h2>
            <div>
              <h3 className="font-semibold text-lg">Developer at Artoon</h3>
              <p className="text-sm text-gray-600">24/11/2000 – Present</p>
              <ul className="list-disc list-inside text-sm space-y-1 mt-1">
                <li>Used AWS and Azure for scalable deployments.</li>
                <li>Implemented CI/CD pipelines using Jenkins and Docker.</li>
                <li>Wrote clean and maintainable code.</li>
                <li>Mentored junior developers.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-900 border-b mb-2 pb-1">
              Education
            </h2>
            <div>
              <h3 className="font-semibold">Amity University</h3>
              <p className="text-sm text-gray-700">
                MCA in Computer | Grade: A
              </p>
              <p className="text-sm text-gray-600">24/11/2023 – Present</p>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b mb-2 pb-1">
              Projects
            </h2>
            <div>
              <h3 className="font-semibold">Resume Builder</h3>
              <p className="text-sm">A</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ResumeClassic;
