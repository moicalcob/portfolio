export default function Experience() {
  const experiences = [
    {
      title: 'Cloud Engineer',
      company: 'CARTO',
      period: 'January 2024 - Present',
      description: 'Developing and maintaining the cloud infrastructure for the company.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      achievements: [
        'Architected and deployed microservices infrastructure serving 1M+ users',
        'Reduced application load time by 60% through optimization techniques',
        'Led migration from monolithic to microservices architecture'
      ],
    },
    {
      title: 'Backend Developer',
      company: 'CARTO',
      period: 'July 2021 - January 2024',
      description: 'Developing and maintaining the backend of the company.',
      technologies: ['Koa', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      achievements: [],
    },
    {
      title: 'Full Stack Engineer',
      company: 'ALTEN SPAIN',
      period: 'June 2021 - July 2021',
      description: 'Developed and maintained full-stack web applications, collaborated with cross-functional teams, and implemented CI/CD pipelines for automated deployments.',
      technologies: ['React', 'Python', 'Django', 'Docker', 'MongoDB'],
      achievements: [
        'Built RESTful APIs handling 100K+ daily requests',
        'Implemented automated testing reducing bugs by 40%',
        'Developed real-time notification system using WebSockets',
      ],
    },
    {
      title: 'Full Stack Engineer',
      company: 'Esportter',
      period: 'February 2019 - August 2020',
      description: 'Developed the frontend and backend of Esportter, a platform for clubs to manage their daily operations.',
      technologies: ['TypeScript', 'Angular', 'Node.js', 'MongoDB', 'Express'],
      achievements: [
        'Developed a full-stack web application for club management',
        'Deployment of the application to the cloud',
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
          Work Experience
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          My professional journey building software and solving problems
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{exp.title}</h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
              </div>
              <span className="font-mono text-sm text-zinc-500 dark:text-zinc-500 bg-zinc-200 dark:bg-zinc-800/50 px-3 py-1 rounded-full w-fit">
                {exp.period}
              </span>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">{exp.description}</p>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded-md text-sm font-mono border border-zinc-300 dark:border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg border border-blue-200 dark:border-blue-900/20">
        <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Education & Certifications</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">Bachelor of Science in Computer Science</h3>
            <p className="text-zinc-600 dark:text-zinc-400">University of Seville, 2017 - 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
