import { ArrowRight, Code2, Database, Cloud, Terminal } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'home' | 'about' | 'projects') => void;
}

export function Home({ onNavigate }: HomeProps) {
  const skills = [
    { icon: Terminal, name: 'DevOps', color: 'text-emerald-400' },
    { icon: Database, name: 'Backend', color: 'text-cyan-400' },
    { icon: Cloud, name: 'Cloud', color: 'text-blue-400' },
    { icon: Code2, name: 'Fullstack', color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="space-y-6">
          <div className="text-emerald-400 font-mono">$ whoami</div>
          <h1 className="text-5xl md:text-7xl text-white">
            Vadim Korchagin
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400">
            DevOps Engineer & Fullstack Developer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Building scalable architectures and automating infrastructure. 
            Passionate about cloud technologies, microservices, and clean code.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-6 py-3 border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-600/10 rounded-lg transition-colors"
            >
              About Me
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <h3 className="text-2xl text-emerald-400 font-mono mb-12">$ cat skills.json</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#131920] border border-gray-800 rounded-xl p-6 hover:border-emerald-600/50 transition-all hover:shadow-lg hover:shadow-emerald-900/20"
            >
              <skill.icon className={`${skill.color} mb-4`} size={32} />
              <div className="text-gray-300">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <h3 className="text-2xl text-emerald-400 font-mono mb-12">$ ls -la /tech-stack</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#131920] border border-gray-800 rounded-xl p-6">
            <h4 className="text-xl text-emerald-400 mb-4">Backend & DevOps</h4>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'GitHub Actions', 'Ansible', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Nginx', 'Linux'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-emerald-900/20 text-emerald-300 rounded-md text-sm font-mono border border-emerald-800/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#131920] border border-gray-800 rounded-xl p-6">
            <h4 className="text-xl text-cyan-400 mb-4">Languages & Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'TypeScript', 'NestJS', 'FastAPI', 'Vue 3', 'PostgreSQL', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-cyan-900/20 text-cyan-300 rounded-md text-sm font-mono border border-cyan-800/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl text-emerald-400 font-mono mb-2">2+</div>
            <div className="text-gray-500">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-emerald-400 font-mono mb-2">2</div>
            <div className="text-gray-500">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-emerald-400 font-mono mb-2">10+</div>
            <div className="text-gray-500">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-emerald-400 font-mono mb-2">∞</div>
            <div className="text-gray-500">Learning</div>
          </div>
        </div>
      </section>
    </div>
  );
}
