const LINKS = [
  { label: 'GitHub',    href: 'https://github.com/naveen52004' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/naveen-g-366101225/' },
  { label: 'Instagram', href: 'https://www.instagram.com/g_n_a_v_e_e_n_/' },
  { label: 'Email',     href: 'mailto:naveenkalai001@gmail.com' },
]

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>NG<span className="logo-bracket">/&gt;</span>
        </div>
        <p>Designed &amp; Built by <strong>Naveen G</strong> · Salem, Tamil Nadu</p>
        <div className="footer-links">
          {LINKS.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
