import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const end = parseInt(value, 10);
      if (isNaN(end)) return;
      if (start === end) {
        setCount(end);
        return;
      }

      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Ease out quad
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * (end - start) + start);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="counter-item" style={{ textAlign: 'center', padding: '1rem' }}>
      {icon && <div className="counter-icon" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div>}
      <div className="counter-number-wrapper" style={{ display: 'inline-flex', alignItems: 'baseline' }}>
        <span 
          className="counter-number gradient-text" 
          style={{ 
            fontSize: 'var(--text-4xl)', 
            fontWeight: 800, 
            fontFamily: 'var(--font-display)',
            lineHeight: 1
          }}
        >
          {count}
        </span>
        {suffix && (
          <span 
            className="counter-suffix" 
            style={{ 
              fontSize: 'var(--text-2xl)', 
              fontWeight: 700, 
              color: 'var(--accent-purple)',
              marginLeft: '2px'
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      <p className="counter-label" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '0.25rem', fontWeight: 500 }}>
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;
