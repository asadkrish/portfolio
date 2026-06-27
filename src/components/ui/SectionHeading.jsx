import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, scrollReveal } from '../../utils/animations';
import './SectionHeading.css';

const SectionHeading = ({ label, title, subtitle, align = 'center', className = '' }) => {
  const isLeft = align === 'left';

  return (
    <motion.div
      className={`section-heading align-${align} ${className}`}
      variants={fadeInUp}
      {...scrollReveal}
    >
      {label && (
        <span className="section-label">
          <span className="section-label-line" />
          {label}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeading;
