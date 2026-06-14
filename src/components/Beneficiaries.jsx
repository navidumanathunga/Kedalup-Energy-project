import React from 'react'
import { School, Building, Heart, Landmark, Users } from 'lucide-react'

export default function Beneficiaries() {
  const beneficiaryData = [
    {
      icon: <School className="beneficiary-icon" />,
      title: "Schools",
      description: "Reduced energy bills and learning opportunities."
    },
    {
      icon: <Building className="beneficiary-icon" />,
      title: "Councils",
      description: "Supporting local community goals."
    },
    {
      icon: <Heart className="beneficiary-icon" />,
      title: "Charities",
      description: "Funding for critical community programs."
    },
    {
      icon: <Landmark className="beneficiary-icon" />,
      title: "Government",
      description: "Meeting renewable energy targets."
    },
    {
      icon: <Users className="beneficiary-icon" />,
      title: "Communities",
      description: "Cleaner environment and local jobs."
    }
  ]

  return (
    <section id="services" className="beneficiaries-section">
      <div className="section-container beneficiaries-container">
        <h2>Who Benefits</h2>
        <div className="beneficiaries-row">
          {beneficiaryData.map((item, index) => (
            <div className="beneficiary-col" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
