import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from '../../data/content';
import { fadeInUp, scrollReveal } from '../../utils/animations';
import SectionHeading from '../ui/SectionHeading';
import './Testimonials.css';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials section section-alt">
      <div className="container">
        <SectionHeading 
          label="Kind words" 
          title="Testimonials" 
        />

        <motion.div 
          className="testimonials-carousel"
          variants={fadeInUp}
          {...scrollReveal}
        >
          <div className="testimonials-card">
            <div className="testimonials-quote-mark">&ldquo;</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="testimonials-content"
              >
                <p className="testimonials-text">
                  {testimonials[current].text}
                </p>
                <div className="testimonials-author">
                  <div className="testimonials-avatar">
                    {testimonials[current].initials}
                  </div>
                  <div className="testimonials-author-info">
                    <span className="testimonials-name">{testimonials[current].name}</span>
                    <span className="testimonials-role">{testimonials[current].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonials-controls">
              <button 
                className="testimonials-btn" 
                onClick={prev} 
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={20} />
              </button>

              <div className="testimonials-dots">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`testimonials-dot ${idx === current ? 'active' : ''}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                className="testimonials-btn" 
                onClick={next} 
                aria-label="Next testimonial"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
