import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'si', label: 'සිංහල' },
  { code: 'ar', label: 'Arabic' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'es', label: 'Spanish' },
  { code: 'zh', label: 'Chinese' },
  { code: 'ko', label: 'Korean' }
]

export default function Navbar({ t, language, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Smooth-scroll to section IDs while accounting for fixed header height
  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const headerHeight = document.querySelector('.header')?.offsetHeight || 80
    const top = el.offsetTop - headerHeight - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handleNavClick = (e, id) => {
    if (e && e.preventDefault) e.preventDefault()
    setIsMobileMenuOpen(false)
    scrollToId(id)
    try {
      history.replaceState && history.replaceState(null, '', `#${id}`)
    } catch (err) {
      // ignore
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled-light' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" aria-label="Kedalup Energy Home" onClick={(e) => handleNavClick(e, 'home')}>
            <span>{t.logo}</span>
          </a>

          <nav role="navigation" aria-label="Main Navigation">
            <ul className="nav-links">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>{t.home}</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t.about}</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{t.services}</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.contact}</a></li>
              <li className="nav-language desktop-only">
                <LanguageMenu
                  language={language}
                  setLanguage={setLanguage}
                  options={languageOptions}
                  label={t.languageLabel}
                />
              </li>
            </ul>
          </nav>

          <div className="language-selector mobile-only">
            {/* Mobile-visible language pill (kept outside centered nav) */}
            <LanguageMenu
              language={language}
              setLanguage={setLanguage}
              options={languageOptions}
              label={t.languageLabel}
            />
          </div>

          <a href="#contact" className="cta-button" onClick={(e) => handleNavClick(e, 'contact')}>
            {t.bookPickup}
          </a>

          <button 
            className="mobile-toggle" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>{t.home}</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t.about}</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{t.services}</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.contact}</a></li>
        </ul>
        <a href="#contact" className="cta-button" onClick={(e) => handleNavClick(e, 'contact')}>
          {t.bookPickup}
        </a>
      </div>
    </>
  )
}

function LanguageMenu({ language, setLanguage, options, label }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const current = options.find(o => o.code === language) || options[0]

  return (
    <div className="language-menu-wrap" ref={ref}>
      <button
        className="language-btn"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(s => !s)}
        type="button"
      >
        <span className="language-label">{current.label}</span>
        <span className="language-caret">▾</span>
      </button>

      {open && (
        <ul className="language-menu" role="listbox">
          {options.map(opt => (
            <li key={opt.code} role="option">
              <button
                type="button"
                className={`language-item ${opt.code === language ? 'active' : ''}`}
                onClick={() => { setLanguage(opt.code); setOpen(false) }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
