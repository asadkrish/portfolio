import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiCopy, FiCheck, FiSend } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../../data/content';
import { staggerContainer, staggerItem, scrollReveal } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin': return <FiLinkedin size={20} />;
      case 'github': return <FiGithub size={20} />;
      case 'x': case 'twitter': return <FiTwitter size={20} />;
      case 'email': case 'mail': return <FiMail size={20} />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionHeading 
          label="Let's connect" 
          title="Get In Touch" 
          subtitle="Have a project in mind, a question, or just want to say hello? I'd love to hear from you."
        />

        <motion.div 
          className="contact-grid"
          variants={staggerContainer}
          {...scrollReveal}
        >
          {/* Left side — Info */}
          <motion.div className="contact-info" variants={staggerItem}>
            <h3 className="contact-info-title">Let's build something great together.</h3>
            <p className="contact-info-text">
              Whether it's a marketing strategy, a product idea, or a collaboration opportunity — I'm always open to conversations that create value.
            </p>

            <div className="contact-email-row">
              <FiMail className="contact-email-icon" />
              <span className="contact-email-address">{personalInfo.email}</span>
              <button 
                className="contact-copy-btn" 
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  aria-label={`Visit ${social.name}`}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right side — Form */}
          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            variants={staggerItem}
          >
            <div className="contact-form-group">
              <label htmlFor="contact-name" className="contact-label">Name</label>
              <input 
                id="contact-name"
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name" 
                className="contact-input" 
                required 
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact-email" className="contact-label">Email</label>
              <input 
                id="contact-email"
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com" 
                className="contact-input" 
                required 
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact-message" className="contact-label">Message</label>
              <textarea 
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..." 
                className="contact-input contact-textarea" 
                rows="5" 
                required 
              />
            </div>

            {formSubmitted ? (
              <div className="contact-success">
                <FiCheck size={20} />
                <span>Message sent! I'll get back to you soon.</span>
              </div>
            ) : (
              <Button variant="primary" size="lg" icon={<FiSend />}>
                Send Message
              </Button>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
