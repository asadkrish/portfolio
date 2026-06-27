import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../data/content';
import { staggerContainer, staggerItem, scrollReveal } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section section-alt">
      <div className="container">
        <SectionHeading 
          label="Credentials" 
          title="Certifications" 
          subtitle="Continuous learning across marketing fundamentals, advanced data analytics, and cloud engineering."
        />

        <motion.div 
          className="certifications-grid"
          variants={staggerContainer}
          {...scrollReveal}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={staggerItem}>
              <Card className="cert-card" hover={true} glow={true}>
                {/* Accent border top using the specific credential color theme */}
                <div 
                  className="cert-accent-bar" 
                  style={{ background: cert.color }} 
                />
                
                <span className="cert-badge" style={{ color: cert.color, background: `${cert.color}0a` }}>
                  {cert.level}
                </span>

                <h3 className="cert-title">{cert.title}</h3>
                
                <div className="cert-footer">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
