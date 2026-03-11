import { useState, useEffect, useCallback } from 'react'

const NAV_ITEMS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]        = useState(false)
  const [activeSection,  setActiveSection]   = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      let current = ''
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 130) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">
          <a href="#hero" onClick={e => scrollTo(e, '#hero')}>
            <span className="logo-bracket">&lt;</span>NG<span className="logo-bracket">/&gt;</span>
          </a>
        </div>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'active-nav' : ''}
              onClick={e => scrollTo(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={e => scrollTo(e, '#contact')}>
            Hire Me
          </a>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
