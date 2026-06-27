import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../../data/content';
import { staggerContainer, staggerItem, heroImageVariants } from '../../utils/animations';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  const [displayedRole, setDisplayedRole] = useState('');
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timerRef = useRef(null);

  const tick = useCallback(() => {
    const roles = personalInfo.typedRoles;
    const currentRole = roles[roleIndexRef.current];
    const isDeleting = isDeletingRef.current;

    if (!isDeleting) {
      // Typing forward
      charIndexRef.current += 1;
      setDisplayedRole(currentRole.substring(0, charIndexRef.current));

      if (charIndexRef.current === currentRole.length) {
        // Finished typing — pause, then start deleting
        timerRef.current = setTimeout(() => {
          isDeletingRef.current = true;
          tick();
        }, 2000);
        return;
      }
      timerRef.current = setTimeout(tick, 80);
    } else {
      // Deleting
      charIndexRef.current -= 1;
      setDisplayedRole(currentRole.substring(0, charIndexRef.current));

      if (charIndexRef.current === 0) {
        // Finished deleting — move to next role
        isDeletingRef.current = false;
        roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
        timerRef.current = setTimeout(tick, 300);
        return;
      }
      timerRef.current = setTimeout(tick, 40);
    }
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(tick, 500);
    return () => clearTimeout(timerRef.current);
  }, [tick]);

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <FiLinkedin size={20} />;
      case 'github':
        return <FiGithub size={20} />;
      case 'x':
      case 'twitter':
        return <FiTwitter size={20} />;
      case 'email':
      case 'mail':
        return <FiMail size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="profile" className="hero">
      {/* Background blobs for premium mesh effect */}
      <div className="hero-glow-blob blob-1" />
      <div className="hero-glow-blob blob-2" />
      <div className="hero-glow-blob blob-3" />
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.span className="hero-pretitle" variants={staggerItem}>
            Hello, I'm
          </motion.span>
          
          <motion.h1 className="hero-title" variants={staggerItem}>
            {personalInfo.name}
          </motion.h1>

          <motion.div className="hero-role-wrapper" variants={staggerItem}>
            <span className="hero-role gradient-text">{displayedRole}</span>
            <span className="hero-cursor">|</span>
          </motion.div>

          <motion.p className="hero-subtitle" variants={staggerItem}>
            {personalInfo.subHeadline}
          </motion.p>
          
          <motion.p className="hero-description" variants={staggerItem}>
            Marketing professional crafting digital experiences that drive growth. Combining an engineering analytical mindset with strategic business training to build growth engines.
          </motion.p>

          <motion.div className="hero-ctas" variants={staggerItem}>
            <Button variant="primary" size="lg" href={personalInfo.resumeUrl} icon={<FiDownload />}>
              Download Resume
            </Button>
            <Button variant="secondary" size="lg" href="#projects" icon={<FiArrowRight />}>
              View Work
            </Button>
          </motion.div>

          <motion.div className="hero-socials" variants={staggerItem}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label={`Find me on ${social.name}`}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-media"
          variants={heroImageVariants}
          initial="initial"
          animate="animate"
        >
          <div className="hero-image-wrapper">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name} 
              className="hero-image" 
            />
            {/* Ambient shadow glow behind the image wrapper */}
            <div className="hero-image-glow" />
          </div>
          {/* Floating decorative shapes */}
          <div className="floating-shape shape-1" />
          <div className="floating-shape shape-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
