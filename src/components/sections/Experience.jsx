import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../../data/content';
import { staggerContainer, staggerItem, scrollReveal } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience section section-alt">
      <div className="container">
        <SectionHeading 
          label="Where I've been" 
          title="Work Experience" 
          subtitle="A track record of managing engineering operations, enterprise tech, and marketing strategies."
        />

        <motion.div 
          className="experience-timeline"
          variants={staggerContainer}
          {...scrollReveal}
        >
          {/* Vertical timeline line */}
          <div className="experience-line" />

          {experience.map((exp, index) => (
            <motion.div 
              key={`${exp.role}-${exp.company}`} 
              className="experience-item"
              variants={staggerItem}
            >
              {/* Dot indicator on the left side line */}
              <div className="experience-dot-container">
                <div className="experience-dot">
                  <FiBriefcase size={14} className="experience-dot-icon" />
                </div>
              </div>

              <Card className="experience-card" hover={true} glow={true}>
                <div className="experience-header">
                  <div className="experience-title-grp">
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta-grp">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>

                <p className="experience-desc">{exp.description}</p>

                <ul className="experience-achievements">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="experience-achievement-item">
                      <span className="experience-bullet" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
