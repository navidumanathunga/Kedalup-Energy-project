import React from 'react'

export default function Hero({ t }) {
  return (
    <section 
      id="home" 
      className="hero" 
      style={{ backgroundImage: `url('/assets/hero-bg.png')` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content animate-fade-in">
          <h1>{t.heroTitle.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < t.heroTitle.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}</h1>
          <p className="hero-subtitle">
            {t.heroSubtitle}
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn-primary">{t.seeHowItWorks}</a>
            <a href="#contact" className="btn-primary">{t.getInvolved}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
