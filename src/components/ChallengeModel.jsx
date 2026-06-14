import React from 'react'
import { Sun, Battery, Recycle, PiggyBank } from 'lucide-react'

export default function ChallengeModel() {
  return (
    <section id="about" className="challenge-model-section">
      <div className="section-container challenge-model-grid">
        {/* Left Column: The Challenge */}
        <div className="challenge-col">
          <div className="challenge-badge">The Challenge</div>
          <p className="challenge-text">
            Schools and communities face increasing energy costs and environmental challenges. Traditional funding models limit their ability to invest in sustainable solutions that could benefit future generations.
          </p>
          <div className="challenge-image-container">
            <img src="/assets/challenge-img.png" alt="Rooftop solar panel array reflecting sunset" loading="lazy" />
          </div>
        </div>

        {/* Right Column: The Kedalup Model */}
        <div className="model-col">
          <h2 className="model-title">The Kedalup Model</h2>
          <div className="model-grid">
            {/* Card 1: Free Installation */}
            <div className="model-card light">
              <div className="card-icon-container">
                <Sun size={32} strokeWidth={1.5} />
              </div>
              <h3>Free Installation</h3>
              <p>We install solar and EV stations at schools at zero cost</p>
            </div>

            {/* Card 2: Discounted Energy */}
            <div className="model-card dark">
              <div className="card-icon-container">
                <Battery size={32} strokeWidth={1.5} />
              </div>
              <h3>Discounted Energy</h3>
              <p>Provide reduced rates through power purchase agreements</p>
            </div>

            {/* Card 3: Full Maintenance */}
            <div className="model-card dark">
              <div className="card-icon-container">
                <Recycle size={32} strokeWidth={1.5} />
              </div>
              <h3>Full Maintenance</h3>
              <p>Ongoing system maintenance and support included</p>
            </div>

            {/* Card 4: Profit Sharing */}
            <div className="model-card light">
              <div className="card-icon-container">
                <PiggyBank size={32} strokeWidth={1.5} />
              </div>
              <h3>Profit Sharing</h3>
              <p>50% of profits reinvested into schools and charities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
