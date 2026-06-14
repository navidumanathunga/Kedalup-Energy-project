import React from 'react'
import { Sun, Battery, Recycle, PiggyBank } from 'lucide-react'

export default function ChallengeModel({ t }) {
  return (
    <section id="about" className="challenge-model-section">
      <div className="section-container challenge-model-grid">
        {/* Left Column: The Challenge */}
        <div className="challenge-col">
          <div className="challenge-badge">{t.challengeHeading}</div>
          <p className="challenge-text">
            {t.challengeText}
          </p>
          <div className="challenge-image-container">
            <img src="/assets/challenge-img.png" alt={t.challengeImageAlt || 'Rooftop solar panel array reflecting sunset'} loading="lazy" />
          </div>
        </div>

        {/* Right Column: The Kedalup Model */}
        <div className="model-col">
          <h2 className="model-title">{t.modelTitle}</h2>
          <div className="model-grid">
            {/* Card 1: Free Installation */}
            <div className="model-card light">
              <div className="card-icon-container">
                <Sun size={32} strokeWidth={1.5} />
              </div>
              <h3>{t.freeInstallation}</h3>
              <p>{t.freeInstallationDesc}</p>
            </div>

            {/* Card 2: Discounted Energy */}
            <div className="model-card dark">
              <div className="card-icon-container">
                <Battery size={32} strokeWidth={1.5} />
              </div>
              <h3>{t.discountedEnergy}</h3>
              <p>{t.discountedEnergyDesc}</p>
            </div>

            {/* Card 3: Full Maintenance */}
            <div className="model-card dark">
              <div className="card-icon-container">
                <Recycle size={32} strokeWidth={1.5} />
              </div>
              <h3>{t.fullMaintenance}</h3>
              <p>{t.fullMaintenanceDesc}</p>
            </div>

            {/* Card 4: Profit Sharing */}
            <div className="model-card light">
              <div className="card-icon-container">
                <PiggyBank size={32} strokeWidth={1.5} />
              </div>
              <h3>{t.profitSharing}</h3>
              <p>{t.profitSharingDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
