const CARDS = [
  { icon: '📧', label: 'Email',    value: 'naveenkalai001@gmail.com', href: 'mailto:naveenkalai001@gmail.com' },
  { icon: '📱', label: 'Phone',    value: '+91 8870214619',            href: 'tel:+918870214619' },
  { icon: '💼', label: 'LinkedIn', value: 'naveen-g-366101225',        href: 'https://www.linkedin.com/in/naveen-g-366101225/' },
  { icon: '🐙', label: 'GitHub',   value: 'naveen52004',               href: 'https://github.com/naveen52004' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="section-desc">
            Open to full-time roles, interesting projects, or just a good conversation about tech.
          </p>
        </div>

        <div className="contact-grid">
          {CARDS.map(c => (
            <a
              key={c.label}
              href={c.href}
              className="contact-card"
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              data-reveal
            >
              <div className="contact-icon-wrap">{c.icon}</div>
              <h3>{c.label}</h3>
              <span>{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
