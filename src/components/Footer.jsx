import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Left Column: Company Info */}
        <div className="footer-col">
          <a href="#home" className="footer-logo">
            <span>Kedalup Energy</span>
          </a>
          <p className="footer-description">
            Powering Australian schools and communities through community solar.
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Book a Pickup</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Column: Contact Details */}
        <div className="footer-col">
          <h3>Contacts</h3>
          <div className="footer-contacts">
            <div className="contact-item">
              <Phone />
              <span>(08) 9321 0000</span>
            </div>
            <div className="contact-item">
              <Mail />
              <span>info@kedalupenergy.com.au</span>
            </div>
            <div className="contact-item">
              <MapPin />
              <span>Perth, Western Australia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Kedalup Energy. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <span>|</span>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
