import React, { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

export default function ContactForm() {
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
    if (!formData.name.trim()) newErrors.name = 'Full name is required.'
    if (!formData.organization.trim()) newErrors.organization = 'Organization name is required.'
    if (!formData.position.trim()) newErrors.position = 'Job position is required.'

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    // Phone number validation (e.g. 8-15 digits, allowing spaces, +, (), -)
    const phoneRegex = /^[0-9+\s()\-]{8,15}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telephone number is required.'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid telephone number (8-15 digits).'
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
        <h2>Ready to Make a Difference?</h2>

        {isSubmitted ? (
          <div className="success-state">
            <CheckCircle2 className="success-icon" />
            <h3>Enquiry Sent Successfully!</h3>
            <p>Thank you for reaching out to Kedalup Energy. Our community solar team will contact you shortly.</p>
            <button className="btn-reset" onClick={handleReset}>Send Another Message</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            
            {/* Name Field */}
            <div className={`form-group ${errors.name ? 'error' : ''}`}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error-message" role="alert">{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-message" role="alert">{errors.email}</span>}
            </div>

            {/* Phone Field */}
            <div className={`form-group ${errors.phone ? 'error' : ''}`}>
              <label htmlFor="phone">Telephone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="e.g. (08) 9321 0000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error-message" role="alert">{errors.phone}</span>}
            </div>

            {/* Organization Field */}
            <div className={`form-group ${errors.organization ? 'error' : ''}`}>
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Enter organization or school name"
                value={formData.organization}
                onChange={handleChange}
                required
              />
              {errors.organization && <span className="error-message" role="alert">{errors.organization}</span>}
            </div>

            {/* Position Field */}
            <div className={`form-group ${errors.position ? 'error' : ''}`}>
              <label htmlFor="position">Position</label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="e.g. Principal, Director, Sustainability Officer"
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
                'Submitting...'
              ) : (
                <>
                  <span>Submit Form</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
