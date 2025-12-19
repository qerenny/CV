import { ExternalLink, GitBranch, Calendar, Users } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Dance Club Event System',
      role: 'Backend Developer',
      period: 'July 2025 - Present',
      description:
        'Event recording and administration system designed to automate sign-ups for events and send notifications via Telegram bot mini-apps, with support for different user roles.',
      achievements: [
        'Developed backend using NestJS + PostgreSQL',
        'Containerized services with Docker',
        'Configured CI/CD pipeline via GitHub Actions',
        'Set up Nginx proxy and environment configurations',
        'Expected 60% reduction in administration time',
        'Increased attendance through automatic reminders',
      ],
      tech: ['NestJS', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Nginx', 'Telegram Bot API'],
      status: 'In Progress',
      color: 'emerald',
    },
    {
      title: 'VPN Multi-Service Platform',
      role: 'Fullstack Developer',
      period: 'October 2024 - Present',
      description:
        'Multiservice platform for automated VPN sales and renewals with payment system integration through Telegram bot. Part of the Selectel Career Wave Scholarship 2025 program.',
      achievements: [
        'Built microservice backend with FastAPI',
        'Developed Telegram bot with CryptoPay and Yookassa payments',
        'Created frontend using Vue 3 + TypeScript',
        'Orchestrated services with Docker Compose',
        'Implemented database migrations with Alembic',
        'Set up CI/CD with GitHub Actions and Ansible deployment',
        'Added centralized logging and Telegram notifications',
      ],
      tech: [
        'FastAPI',
        'Vue 3',
        'TypeScript',
        'Docker',
        'Ansible',
        'PostgreSQL',
        'Alembic',
        'GitHub Actions',
        'CryptoPay',
        'Yookassa',
      ],
      status: 'Active',
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    if (color === 'emerald') {
      return {
        border: 'border-emerald-600/50',
        badge: 'bg-emerald-900/30 text-emerald-300 border-emerald-700/30',
        tag: 'bg-emerald-900/20 text-emerald-300 border-emerald-800/30',
        text: 'text-emerald-400',
      };
    }
    return {
      border: 'border-cyan-600/50',
      badge: 'bg-cyan-900/30 text-cyan-300 border-cyan-700/30',
      tag: 'bg-cyan-900/20 text-cyan-300 border-cyan-800/30',
      text: 'text-cyan-400',
    };
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-emerald-400 font-mono mb-4">$ git log --all --graph</div>
        <h1 className="text-4xl md:text-6xl text-white mb-6">Projects</h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          A showcase of my recent work in DevOps engineering and fullstack development. 
          Each project demonstrates my commitment to automation, scalability, and clean architecture.
        </p>
      </section>

      {/* Projects List */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-800">
        <div className="space-y-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <article
                key={index}
                className={`bg-[#131920] border-2 ${colors.border} rounded-2xl p-8 hover:shadow-2xl hover:shadow-${project.color}-900/10 transition-all`}
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className={`text-2xl md:text-3xl ${colors.text}`}>
                        {project.title}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs border ${colors.badge}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {project.role}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {project.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg text-white mb-3 flex items-center gap-2">
                    <GitBranch size={20} className={colors.text} />
                    Key Achievements
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className={`${colors.text} mt-1`}>▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm text-gray-500 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-md text-sm font-mono border ${colors.tag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Additional Projects Teaser */}
      <section className="max-w-6xl mx-auto px-6 py-12 mb-12">
        <div className="bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 border border-emerald-800/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl text-white mb-4">More Projects Coming Soon</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm constantly working on new projects involving cloud infrastructure, 
            automation tools, and innovative solutions. Check back regularly for updates!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <ExternalLink size={20} />
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
