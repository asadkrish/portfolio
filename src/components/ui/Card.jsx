import React, { useRef } from 'react';
import './Card.css';

const Card = ({ children, className = '', hover = true, glow = false, ...props }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !glow) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      className={`card ${hover ? 'card-hover' : ''} ${glow ? 'card-glow' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {glow && <div className="card-glow-effect" />}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
