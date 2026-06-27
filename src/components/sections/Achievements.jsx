import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../../data/content';
import { staggerContainer, staggerItem, scrollReveal } from '../../utils/animations';
import AnimatedCounter from '../ui/AnimatedCounter';
import Card from '../ui/Card';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements">
      <div className="container">
        <motion.div 
          className="achievements-grid"
          variants={staggerContainer}
          {...scrollReveal}
        >
          {achievements.map((item) => (
            <motion.div key={item.label} variants={staggerItem}>
              <Card className="achievement-card" hover={true} glow={true}>
                <AnimatedCounter 
                  value={item.value} 
                  suffix={item.suffix} 
                  label={item.label} 
                  icon={item.icon} 
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
