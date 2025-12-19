import { GraduationCap, MapPin, Award, Dumbbell, Music, Wrench } from 'lucide-react';

export function About() {
  const education = [
    {
      school: 'ITMO University',
      location: 'St. Petersburg',
      degree: "Bachelor's degree",
      field: 'Faculty of Applied Informatics, Mobile and Network Technologies',
      years: '2022-2026',
    },
    {
      school: 'St. Petersburg State University',
      location: 'St. Petersburg',
      degree: "Bachelor's Degree",
      field: 'Faculty of Mathematics and Computer Science, Data Sciences',
      years: '2021-2022',
    },
  ];

  const hobbies = [
    { icon: Dumbbell, title: 'Powerlifting', description: 'Strength training and competitions' },
    { icon: Music, title: 'Social Dancing', description: 'Conducting workshops and organizing balls' },
    { icon: Wrench, title: 'Tech Tinkering', description: 'Repairing electronics and network infrastructure' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-emerald-400 font-mono mb-4">$ cat about.md</div>
        <h1 className="text-4xl md:text-6xl text-white mb-6">About Me</h1>
        <div className="flex items-center gap-2 text-gray-400 mb-8">
          <MapPin size={20} className="text-emerald-400" />
          <span>Saint Petersburg, Russia</span>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-800">
        <div className="bg-[#131920] border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl text-emerald-400 mb-6">$ echo $BIO</h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a DevOps Engineer and Fullstack Developer with a passion for building 
              scalable, automated systems. I thrive on challenges that involve cloud 
              technologies, microservices architecture, and CI/CD pipelines.
            </p>
            <p>
              Currently working on automating event management systems and developing 
              multi-service platforms. I believe in writing clean code, maintaining 
              robust infrastructure, and continuous learning.
            </p>
            <p>
              I participate in both team and individual projects, with a strong interest 
              in DevOps, cloud technologies, and scalable architecture. I run a home 
              server for personal projects and experimentation.
            </p>
            <p>
              Beyond coding, I'm actively involved in the ballroom dance community, 
              serving as a public relations manager at a dance club and organizing 
              large-scale events.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl text-emerald-400 font-mono mb-8">
          <GraduationCap className="inline mr-2" size={28} />
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#131920] border border-gray-800 rounded-xl p-6 hover:border-emerald-600/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl text-white">{edu.school}</h3>
                <span className="text-emerald-400 font-mono">{edu.years}</span>
              </div>
              <div className="text-gray-400 mb-2">{edu.degree}</div>
              <div className="text-gray-500">{edu.field}</div>
              <div className="text-gray-500 text-sm mt-2">📍 {edu.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-800">
        <h2 className="text-2xl text-emerald-400 font-mono mb-8">
          $ grep -r "skills" --include="*.json"
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#131920] border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg text-emerald-400 mb-4">DevOps & Infrastructure</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▸</span> Docker & Containerization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▸</span> GitHub Actions CI/CD
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▸</span> Ansible Automation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▸</span> Proxmox Virtualization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">▸</span> Linux Administration
              </li>
            </ul>
          </div>
          <div className="bg-[#131920] border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg text-cyan-400 mb-4">Backend & Databases</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▸</span> Python & FastAPI
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▸</span> NestJS & TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▸</span> PostgreSQL & MySQL
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▸</span> Redis & RabbitMQ
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">▸</span> REST API Design
              </li>
            </ul>
          </div>
          <div className="bg-[#131920] border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg text-purple-400 mb-4">Tools & Languages</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▸</span> Git & Version Control
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▸</span> Vue 3 & Frontend
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▸</span> Postman & API Testing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▸</span> Nginx Configuration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">▸</span> English (B1-B2)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-800">
        <h2 className="text-2xl text-emerald-400 font-mono mb-8">
          $ ls ~/hobbies
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-[#131920] border border-gray-800 rounded-xl p-6 hover:border-emerald-600/50 transition-all"
            >
              <hobby.icon className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-lg text-white mb-2">{hobby.title}</h3>
              <p className="text-gray-400">{hobby.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="max-w-6xl mx-auto px-6 py-12 mb-12">
        <div className="bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 border border-emerald-800/30 rounded-xl p-8">
          <Award className="text-emerald-400 mb-4" size={32} />
          <h3 className="text-xl text-white mb-4">Achievements & Involvement</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              <span>Public Relations Manager at Dance Club - organizing workshops and mass balls</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              <span>Selectel Career Wave Scholarship recipient (2025)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              <span>Self-hosted infrastructure enthusiast with home server setup</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              <span>Quick learner with passion for emerging technologies</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
