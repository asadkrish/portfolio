import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/content';
import { staggerContainer, staggerItem, scrollReveal } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHeading 
          label="My work" 
          title="Featured Projects" 
          subtitle="A collection of data analytics models, strategy case studies, and application pipelines."
        />

        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          {...scrollReveal}
        >
          {projects.map((proj) => (
            <motion.div key={proj.title} variants={staggerItem}>
              <Card className="project-card" hover={true} glow={true}>
                <div className="project-image-container">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="project-image" 
                  />
                  <div className="project-image-overlay" />
                </div>

                <div className="project-body">
                  <span className="project-subtitle">{proj.subtitle}</span>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-description">{proj.description}</p>

                  <div className="project-details">
                    <div className="project-detail-item">
                      <strong>Problem:</strong> {proj.problem}
                    </div>
                    <div className="project-detail-item">
                      <strong>Solution:</strong> {proj.solution}
                    </div>
                    <div className="project-detail-item">
                      <strong>Results:</strong> {proj.impact}
                    </div>
                  </div>

                  <div className="project-tags">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="project-tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <Button variant="secondary" size="sm" href={proj.github} icon={<FiGithub />}>
                      GitHub
                    </Button>
                    {proj.demo && (
                      <Button variant="ghost" size="sm" href={proj.demo} icon={<FiExternalLink />}>
                        Presentation
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
