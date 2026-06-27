import React from 'react';
import { FiLinkedin, FiGithub, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo, navLinks, socialLinks } from '../../data/content';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <FiLinkedin size={18} />;
      case 'github':
        return <FiGithub size={18} />;
      case 'x':
      case 'twitter':
        return <FiTwitter size={18} />;
      case 'email':
      case 'mail':
        return <FiMail size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="footer section-alt">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <a href="#profile" className="footer-logo">
              {personalInfo.name}
            </a>
            <p className="footer-bio">{personalInfo.subHeadline}</p>
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={`Visit Krishnaprasad's ${social.name}`}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-nav">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button 
            className="footer-scroll-top" 
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
