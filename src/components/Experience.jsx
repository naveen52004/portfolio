const BULLETS = [
  <>Delivered scalable, production-ready solutions for international clients including <strong>Cruise</strong> (ship booking platform) and <strong>FairBill</strong> (utility management)</>,
  <>Revamped the <strong>Cruise Booking Flow</strong> using React, Node.js &amp; Express.js — improving dynamic flow handling and enabling enhanced self-serve capabilities</>,
  <>Collaborated closely with AI engineering teams to integrate <strong>AI-driven features</strong> into production workflows</>,
  <>Designed and implemented RESTful APIs including <strong>Twitter/X integration</strong> to auto-generate customer tickets, boosting automation efficiency</>,
  <>Improved frontend modularity using <strong>Redux</strong>, reducing configuration complexity by <strong>40%</strong> and improving scalability for SMB clients</>,
  <>Resolved critical production issues for <strong>BigBasket</strong> and <strong>Zepto</strong>, maintaining <strong>99.9% uptime</strong></>,
  <>Worked cross-functionally with QA engineers, product managers, and designers — from ideation to production</>,
]

const STACK = ['React', 'Redux', 'Node.js', 'Express.js', 'Java', 'Spring Boot', 'TypeScript', 'REST APIs']

const BADGES = [
  { label: 'Full-Time',    cls: 'badge-green' },
  { label: 'Full Stack',   cls: 'badge-blue' },
  { label: 'AI Integration', cls: 'badge-purple' },
  { label: 'Enterprise',   cls: 'badge-orange' },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Work History</div>
          <h2 className="section-title">
            Professional <span className="highlight">Experience</span>
          </h2>
        </div>

        <div className="experience-timeline">
          <div className="exp-card" data-reveal>
            <div className="exp-card-top-bar" />

            <div className="exp-header">
              <div className="exp-company">
                <div className="company-logo">KCX</div>
                <div className="company-info">
                  <h3>Software Development Engineer I</h3>
                  <span className="company-name">KaptureCX &nbsp;·&nbsp; Bangalore, India</span>
                </div>
              </div>
              <span className="exp-date">Jan 2025 — Present</span>
            </div>

            <div className="exp-badges">
              {BADGES.map(b => (
                <span key={b.label} className={`badge ${b.cls}`}>{b.label}</span>
              ))}
            </div>

            <ul className="exp-list">
              {BULLETS.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            <div className="exp-stack">
              {STACK.map(s => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
