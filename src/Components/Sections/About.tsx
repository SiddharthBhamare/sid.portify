import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "TypeScript", "HTML", "CSS"];

  const backendSkills = [
    ".NET Core",
    "C#",
    "GraphQL (HotChocolate)",
    "SQL Server",
    "PostgreSQL",
    "RabbitMQ",
  ];

  const toolsAndPrinciples = [
    "Azure DevOps",
    "AWS (Beginner)",
    "CI/CD",
    "SOLID Principles",
    "Design Patterns",
    "Unit Testing (xUnit)",
    "RESTful APIs",
    "JWT Authentication",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6 bg-gradient-to-br from-white/5 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-white/10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Senior Software Engineer with 7+ years of experience in building
              scalable and efficient web applications using .NET and modern
              JavaScript frameworks. Proficient in both frontend and backend
              development, database management, and microservices architecture.
              Skilled in GraphQL, RESTful APIs, JWT-based authentication, and
              enterprise-grade integration using Azure, RabbitMQ, and DevOps
              pipelines. Strong grasp of SOLID principles and design patterns,
              passionate about clean code, test automation, and agile
              collaboration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tools & Principles</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsAndPrinciples.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.E. in Computer Engineering</strong> – D.Y. Patil
                  College of Engineering, Akurdi, Pune (72%)
                </li>
                <li>
                  <strong>Diploma in Computer Technology</strong> – Government
                  Polytechnic, Beed (78%)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    🟦 Software Engineer –{" "}
                    <span className="italic">
                      Definitive Healthcare (Remote)
                    </span>
                  </h4>
                  <p className="text-sm">Oct 2023 – Present</p>
                  <p>
                    Developing scalable applications using .NET Core and React.
                    Working on OpenAPI-based integrations and secure GraphQL
                    endpoints.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    🟨 .NET Application Developer –{" "}
                    <span className="italic">Apexanalytix</span>
                  </h4>
                  <p className="text-sm">Jun 2023 – Oct 2023</p>
                  <p>
                    Built vendor management tools and optimized backend
                    workflows using MVC, SQL Server, and APIs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    🟩 Senior Software Engineer –{" "}
                    <span className="italic">Sagitec Solutions</span>
                  </h4>
                  <p className="text-sm">Jun 2021 – Jun 2023</p>
                  <p>
                    Led modules for pension administration portals. Managed
                    deployments, sprint demos, and DevOps automation.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    🟫 Software Engineer –{" "}
                    <span className="italic">Sagitec Solutions</span>
                  </h4>
                  <p className="text-sm">Jan 2018 – Jun 2021</p>
                  <p>
                    Worked on full-stack development for enterprise solutions
                    using .NET, ADO.NET, and Oracle DB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
