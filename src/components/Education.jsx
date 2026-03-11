const CERTS = [
  {
    title: 'Java Full Stack Developer',
    issuer: 'Wipro TalentNext',
    details: 'Spring Boot · React · MySQL',
  },
  {
    title: 'Salesforce Developer Internship',
    issuer: 'Salesforce',
    details: 'Enterprise CRM Development',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="edu-cert-grid">

          {/* Education */}
          <div className="edu-side" data-reveal>
            <div className="section-tag">Academic Background</div>
            <h2 className="section-title-sm">Education</h2>
            <div className="edu-card">
              <div className="edu-icon-wrap">🎓</div>
              <div className="edu-info">
                <h3>B.E — Computer Science &amp; Engineering</h3>
                <span className="edu-school">Sona College of Technology, Salem</span>
                <div className="edu-meta">
                  <span className="edu-year">2021 — 2025</span>
                  <span className="edu-cgpa">CGPA: 8.82</span>
                </div>
                <p className="edu-note">Coursework: Data Structures, Web Development, Software Engineering, AI/ML</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="cert-side" data-reveal>
            <div className="section-tag">Achievements</div>
            <h2 className="section-title-sm">Certifications</h2>
            <div className="cert-list">
              {CERTS.map(c => (
                <div key={c.title} className="cert-card">
                  <div className="cert-check">✓</div>
                  <div className="cert-info">
                    <h3>{c.title}</h3>
                    <span className="cert-issuer">{c.issuer}</span>
                    <p>{c.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
