import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/content';
import { staggerContainer, staggerItem, scrollReveal } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionHeading 
          label="What I bring" 
          title="Skills & Expertise" 
          subtitle="A multidisciplinary toolset bridging quantitative data analysis and creative brand growth."
        />

        <motion.div 
          className="skills-grid"
          variants={staggerContainer}
          {...scrollReveal}
        >
          {skills.map((category) => (
            <motion.div key={category.category} variants={staggerItem}>
              <Card className="skills-card" hover={true} glow={true}>
                <div className="skills-card-header">
                  <span className="skills-category-icon">{category.icon}</span>
                  <h3 className="skills-category-title">{category.category}</h3>
                </div>
                <p className="skills-category-description">{category.description}</p>
                <div className="skills-list">
                  {category.items.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
