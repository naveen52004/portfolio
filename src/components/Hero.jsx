import { useState, useEffect, useRef } from 'react'

const PHRASES = [
  'Software Dev Engineer I',
  'Full Stack Developer',
  'React & Spring Boot Dev',
  'AI Integration Specialist',
  'Production Systems Builder',
]

const STATS = [
  { num: '1+',    label: 'Year Experience' },
  { num: '4+',    label: 'Projects Built'  },
  { num: '10+',   label: 'Technologies'    },
  { num: '99.9%', label: 'Client Uptime'   },
]

export default function Hero() {
  const [typed,   setTyped]   = useState('')
  const stateRef  = useRef({ pi: 0, ci: 0, deleting: false, timerId: null })

  useEffect(() => {
    const s = stateRef.current

    function tick() {
      const phrase = PHRASES[s.pi]
      if (s.deleting) {
        s.ci = Math.max(0, s.ci - 1)
        setTyped(phrase.substring(0, s.ci))
      } else {
        s.ci = Math.min(phrase.length, s.ci + 1)
        setTyped(phrase.substring(0, s.ci))
      }

      let delay = 80
      if (!s.deleting && s.ci === phrase.length) { delay = 2200; s.deleting = true }
      else if (s.deleting && s.ci === 0)         { s.deleting = false; s.pi = (s.pi + 1) % PHRASES.length; delay = 450 }
      else                                        { delay = s.deleting ? 38 : 80 }

      s.timerId = setTimeout(tick, delay)
    }

    s.timerId = setTimeout(tick, 1300)
    return () => clearTimeout(s.timerId)
  }, [])

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Open to new opportunities
        </div>

        <h1 className="hero-title">
          <span className="greeting">Hello, I'm</span>
          <span className="name">Naveen G</span>
        </h1>

        <h2 className="hero-subtitle">
          <span className="typed-text">{typed}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="hero-desc">
          SDE I at <strong>KaptureCX</strong> · Building scalable, production-grade applications
          with Java, Spring Boot, React &amp; Node.js · Passionate about AI-driven solutions.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
            View My Work
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
            Get In Touch
          </button>
        </div>

        <div className="hero-stats">
          {STATS.map((s, i) => (
            <div key={s.num} className="stat-group">
              {i > 0 && <div className="stat-divider" />}
              <div className="stat">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
