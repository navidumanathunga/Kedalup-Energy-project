import React from 'react'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="hero" 
      style={{ backgroundImage: `url('/assets/hero-bg.png')` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content animate-fade-in">
          <h1>Powering Schools.<br />Empowering Communities.</h1>
          <p className="hero-subtitle">
            Creating sustainable futures through renewable energy partnerships with Aboriginal communities, schools, and charities.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn-primary">See How It Works</a>
            <a href="#contact" className="btn-primary">Get Involved</a>
          </div>
        </div>
      </div>
    </section>
  )
}
