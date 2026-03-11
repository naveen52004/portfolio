const CATEGORIES = [
  {
    icon: '⚡',
    title: 'Languages',
    tags: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C'],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    tags: ['React', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    tags: ['Spring Boot', 'Node.js', 'Express.js', 'Kafka', 'Redis'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    tags: ['MySQL', 'MongoDB'],
  },
  {
    icon: '🤖',
    title: 'AI & APIs',
    tags: ['OpenAI', 'Gemini AI', 'REST APIs', 'Twitter/X API'],
  },
  {
    icon: '🔧',
    title: 'DevOps & Tools',
    tags: ['Git', 'Docker', 'Postman', 'Microservices'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Technical Stack</div>
          <h2 className="section-title">
            Skills &amp; <span className="highlight">Technologies</span>
          </h2>
          <p className="section-desc">Battle-tested technologies I use to build production-ready applications</p>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map(cat => (
            <div key={cat.title} className="skill-category" data-reveal>
              <h3 className="category-title">
                <span className="cat-icon">{cat.icon}</span>
                {cat.title}
              </h3>
              <div className="skill-tags">
                {cat.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
