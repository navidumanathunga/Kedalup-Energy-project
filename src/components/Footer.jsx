import React from 'react'
import { Phone, Mail, MapPin, Leaf, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer({ t }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Left Column: Company Info */}
        <div className="footer-col">
          <a href="#home" className="footer-logo">
            <Leaf size={24} className="footer-logo-icon" />
            <span>{t.logo}</span>
          </a>
          <p className="footer-description">
            {t.footerDescription}
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="footer-col">
          <h3>{t.quickLinksTitle}</h3>
          <ul className="footer-links">
            <li><a href="#home">{t.home}</a></li>
            <li><a href="#about">{t.about}</a></li>
            <li><a href="#services">{t.services}</a></li>
            <li><a href="#contact">{t.bookPickup}</a></li>
            <li><a href="#contact">{t.contact}</a></li>
          </ul>
        </div>

        {/* Right Column: Contact Details */}
        <div className="footer-col">
          <h3>{t.contactsTitle}</h3>
          <div className="footer-contacts">
            <div className="contact-item">
              <Phone />
              <span>{t.phone}</span>
            </div>
            <div className="contact-item">
              <Mail />
              <span>{t.email}</span>
            </div>
            <div className="contact-item">
              <MapPin />
              <span>{t.address}</span>
            </div>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} {t.logo}. {t.copyright}</p>
        <div className="footer-legal">
          <a href="#privacy">{t.privacy}</a>
          <span>|</span>
          <a href="#terms">{t.terms}</a>
        </div>
      </div>
    </footer>
  )
}
