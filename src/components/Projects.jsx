const PROJECTS = [
  {
    id: '01',
    icon: '🤖',
    title: 'AI-Powered Dynamic Dashboard Builder',
    desc: <>Led development of an AI-based dashboard builder enabling non-technical users to create data visualizations using <strong>natural language and voice commands</strong>. Reduced time-to-insight by <strong>70%</strong> for business users.</>,
    features: [
      'Voice-to-text input with dynamic query generation',
      'Real-time bar, line, pie & table charts with persistent dashboards',
      'Reusable REST APIs and frontend components for BI workflows',
    ],
    stack: ['React', 'Redux', 'Node.js', 'OpenAI', 'Tailwind CSS'],
    featured: true,
    accent: '',
  },
  {
    id: '02',
    icon: '🎨',
    title: 'Kapture AI Studio',
    desc: <>AI-powered UI to generate chatbot themes from uploaded website screenshots using <strong>Gemini AI</strong>. Enables dynamic, on-brand theme customization for enterprise deployments.</>,
    features: [
      'JSON-based theme config via Gemini AI + manual Redux controls',
      'Backend workflows for config persistence & runtime theme loading',
    ],
    stack: ['React', 'Redux', 'Gemini AI', 'Java', 'SQL'],
    featured: false,
    accent: 'accent-purple',
  },
  {
    id: '03',
    icon: '🔍',
    title: 'PFDNet — Photo Forgery Detection',
    desc: <>Deep learning system using <strong>Invertible Neural Networks</strong> to detect image forgery. Addresses cybersecurity and deepfake threats with high detection accuracy.</>,
    features: [
      'INN architecture for precise tampered-region detection',
      'Run-Length Encoding (RLE) for lossless compression & self-recovery',
    ],
    stack: ['Python', 'Deep Learning', 'INN', 'RLE'],
    featured: false,
    accent: 'accent-orange',
  },
  {
    id: '04',
    icon: '🍽️',
    title: 'Food Recipe Website',
    desc: <>Full-stack recipe platform with authentication, responsive UI, and intuitive navigation. Secure PHP + MySQL backend for data handling and session management.</>,
    features: [
      'User authentication & secure session management',
      'Responsive, accessible recipe browsing experience',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    featured: false,
    accent: 'accent-green',
  },
]

function ProjectCard({ project }) {
  const { id, icon, title, desc, features, stack, featured, accent } = project
  return (
    <div className={`project-card${featured ? ' featured' : ''}`} data-reveal>
      <div className={`project-top-accent${accent ? ` ${accent}` : ''}`} />
      <div className="project-content">
        <div className="project-header">
          <span className="project-num">{id}</span>
          <div className="project-icon-wrap">{icon}</div>
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>
        <ul className="project-features">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <div className="project-footer">
          <div className="project-stack">
            {stack.map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-desc">Things I've built that I'm proud of</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
