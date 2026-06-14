import React from 'react'
import { School, Building, Heart, Landmark, Users } from 'lucide-react'

export default function Beneficiaries({ t }) {
  const icons = [
    <School className="beneficiary-icon" key="icon-school" />, 
    <Building className="beneficiary-icon" key="icon-building" />, 
    <Heart className="beneficiary-icon" key="icon-heart" />, 
    <Landmark className="beneficiary-icon" key="icon-landmark" />, 
    <Users className="beneficiary-icon" key="icon-users" />
  ]

  const beneficiaryData = (t && Array.isArray(t.beneficiaries) && t.beneficiaries.length)
    ? t.beneficiaries
    : [
    { title: 'Schools', description: 'Reduced energy bills and learning opportunities.' },
    { title: 'Councils', description: 'Supporting local community goals.' },
    { title: 'Charities', description: 'Funding for critical community programs.' },
    { title: 'Government', description: 'Meeting renewable energy targets.' },
    { title: 'Communities', description: 'Cleaner environment and local jobs.' }
  ]

  return (
    <section id="services" className="beneficiaries-section">
      <div className="section-container beneficiaries-container">
        <h2>{t.beneficiariesHeading}</h2>
        <div className="beneficiaries-row">
          {beneficiaryData.map((item, index) => (
            <div className="beneficiary-col" key={index}>
              {icons[index % icons.length]}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
