import React, { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

export default function ContactForm({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    position: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field if user begins typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Required fields check
    if (!formData.name.trim()) newErrors.name = t.requiredName || 'Full name is required.'
    if (!formData.organization.trim()) newErrors.organization = t.requiredOrganization || 'Organization name is required.'
    if (!formData.position.trim()) newErrors.position = t.requiredPosition || 'Job position is required.'

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = t.requiredEmail || 'Email address is required.'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t.invalidEmail || 'Please enter a valid email address.'
    }

    // Phone number validation (e.g. 8-15 digits, allowing spaces, +, (), -)
    const phoneRegex = /^[0-9+\s()\-]{8,15}$/
    if (!formData.phone.trim()) {
      newErrors.phone = t.requiredPhone || 'Telephone number is required.'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = t.invalidPhone || 'Please enter a valid telephone number (8-15 digits).'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          position: ''
        })
      }, 1200)
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setErrors({})
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container contact-container">
        <h2>{t.contactHeading}</h2>

        {isSubmitted ? (
          <div className="success-state">
            <CheckCircle2 className="success-icon" />
            <h3>{t.successTitle}</h3>
            <p>{t.successMessage}</p>
            <button className="btn-reset" onClick={handleReset}>{t.sendAnother}</button>
          </div>
        ) : (
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
          >
            <div className="contact-form-inner">
            
            {/* Name Field */}
            <div className={`form-group ${errors.name ? 'error' : ''}`}>
              <label htmlFor="name">{t.fullNameLabel}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error-message" role="alert">{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <label htmlFor="email">{t.emailLabel}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-message" role="alert">{errors.email}</span>}
            </div>

            {/* Phone Field */}
            <div className={`form-group ${errors.phone ? 'error' : ''}`}>
              <label htmlFor="phone">{t.phoneLabel}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t.phonePlaceholder}
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error-message" role="alert">{errors.phone}</span>}
            </div>

            {/* Organization Field */}
            <div className={`form-group ${errors.organization ? 'error' : ''}`}>
              <label htmlFor="organization">{t.organizationLabel}</label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder={t.organizationPlaceholder}
                value={formData.organization}
                onChange={handleChange}
                required
              />
              {errors.organization && <span className="error-message" role="alert">{errors.organization}</span>}
            </div>

            {/* Position Field */}
            <div className={`form-group ${errors.position ? 'error' : ''}`}>
              <label htmlFor="position">{t.positionLabel}</label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder={t.positionPlaceholder}
                value={formData.position}
                onChange={handleChange}
                required
              />
              {errors.position && <span className="error-message" role="alert">{errors.position}</span>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn-submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                (t.submitting || 'Submitting...')
              ) : (
                <>
                  <span>{t.submitButton}</span>
                  <Send size={16} />
                </>
              )}
            </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
