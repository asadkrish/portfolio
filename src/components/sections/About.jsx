import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, journey } from '../../data/content';
import { staggerContainer, staggerItem, scrollReveal } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section section-alt">
      <div className="container">
        <SectionHeading 
          label="Get to know me" 
          title="About Me" 
          subtitle="An engineer by training, a business thinker by education, and a marketer by choice."
        />

        <div className="about-bio-grid">
          <motion.div 
            className="about-image-wrapper"
            variants={staggerItem}
            {...scrollReveal}
          >
            <div className="about-image-border">
              <img 
                src={personalInfo.aboutImage} 
                alt="Krishnaprasad K" 
                className="about-img" 
              />
            </div>
          </motion.div>

          <motion.div 
            className="about-bio-text"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p className="about-bio-paragraph bio-lead" variants={staggerItem}>
              {personalInfo.bio}
            </motion.p>
            <motion.p className="about-bio-paragraph" variants={staggerItem}>
              {personalInfo.bioExtended}
            </motion.p>
            <motion.p className="about-bio-paragraph" variants={staggerItem}>
              I believe in <strong>product thinking</strong> — viewing every campaign, brand, and strategy as a product that needs to solve a real human problem, yield clear measurable value, and delight its users.
            </motion.p>
          </motion.div>
        </div>

        {/* Timeline Journey */}
        <div className="about-timeline-section">
          <h3 className="about-timeline-title gradient-text">My Journey</h3>
          
          <div className="about-timeline">
            <div className="timeline-line" />

            {journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={item.title} 
                  className={`timeline-item ${isEven ? 'item-left' : 'item-right'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="timeline-dot-wrapper">
                    <div className="timeline-dot">
                      <span className="timeline-dot-inner" />
                    </div>
                  </div>

                  <Card className="timeline-card" hover={true} glow={true}>
                    <div className="timeline-card-header">
                      <span className="timeline-card-icon">{item.icon}</span>
                      <span className="timeline-card-year">{item.year}</span>
                    </div>
                    <h4 className="timeline-card-title">{item.title}</h4>
                    <h5 className="timeline-card-subtitle">{item.subtitle}</h5>
                    <p className="timeline-card-description">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
